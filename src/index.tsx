import { app, events, init, window } from '@neutralinojs/lib';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const onWindowClose = () => {
  app.exit();
};

const initCustomWindowBar = async () => {
  const closeBtn = document.getElementById('closeBtn');

  closeBtn?.addEventListener('click', onWindowClose);

  await window.setDraggableRegion('draggableRegion');
};

init();
events.on('windowClose', onWindowClose);
events.on('ready', initCustomWindowBar);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
