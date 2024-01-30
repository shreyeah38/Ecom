import React from 'react';
import {createRoot} from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

import {
  BrowserRouter,
  // Routes,
  // Route,
  // Link
} from "react-router-dom";

const root = createRoot(document.getElementById('root'));
 root.render(
    <BrowserRouter>
    <Provider store={store}>
      <App/>
      </Provider>
    </BrowserRouter>,
    // document.getElementById('root')
  );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
