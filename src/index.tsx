/* @refresh reload */
import { init } from '@neutralinojs/lib';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

init();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
