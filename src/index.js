import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import UseCustomContext from './useCustomContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UseCustomContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UseCustomContext>
);

