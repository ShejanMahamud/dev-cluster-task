import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import Route from './Route/Route.jsx';
import { Provider } from 'react-redux';
import { persistor,store } from './app/store.js';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={Route} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
