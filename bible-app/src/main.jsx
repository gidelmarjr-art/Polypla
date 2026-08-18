import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("ERRO CRÍTICO: A div com id 'root' não foi encontrada no index.html!");
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}