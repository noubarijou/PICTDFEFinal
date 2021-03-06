import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
/* import "react-datepicker/dist/react-datepicker.css"; */
import App from './App';
import { AuthProvider } from "./context/AuthProvider";





ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
