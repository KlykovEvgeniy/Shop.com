import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AuthProvider from './context/AuthProvider';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
