import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{BrowserRouter} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Click from './Higher/Click'
import Hover from './Higher/Hover'
import Apps from './Apps'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    {/* <Click /> */}
    {/* <Hover /> */}
    <Apps />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
