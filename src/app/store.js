import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "../reducers/reducers";


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["actionWithFilePayload"],
        ignoredPaths: ["stateWithFile"],
      },
    }),
});

export const persistor = persistStore(store)