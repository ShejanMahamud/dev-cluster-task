import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/User/userSlice'


export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["actionWithFilePayload"],
        ignoredPaths: ["stateWithFile"],
      },
    }),
});

export default store