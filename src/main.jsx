import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { myApi } from './redux/api.js';
import { Provider } from 'react-redux';
import store from './Store/store.js'

// Get the root element from the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React component tree
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={myApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
