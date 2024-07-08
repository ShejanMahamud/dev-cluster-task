import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import Route from './Route/Route.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={Route} />
    </Provider>
  </React.StrictMode>
);