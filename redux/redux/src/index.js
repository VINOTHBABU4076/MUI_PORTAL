import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import UserReducer from './features/User';
import themeReducer from './features/Theme'

const store=configureStore({
  reducer:{
    user:UserReducer,
    theme:themeReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

