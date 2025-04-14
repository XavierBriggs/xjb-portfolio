import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import reportWebVitals from './reportWebVitals';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";
import "./components/styles/Navbar.css";
import "./pages/styles/Project.css";
import "./components/styles/Footer.css";

import "./pages/styles/About.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
