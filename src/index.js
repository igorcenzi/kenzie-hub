import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './GlobalStyle'
import {BrowserRouter} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'

ReactDOM.render(
  <React.StrictMode> 
    <ToastContainer/>
    <BrowserRouter>
        <GlobalStyle/>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
