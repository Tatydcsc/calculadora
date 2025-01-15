<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calculator from "./main/Calculator";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>
);
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyles from './global'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>
);

>>>>>>> 77a6836 (criação da logica e ajustes no codigo)
