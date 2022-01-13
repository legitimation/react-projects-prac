import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context';
ReactDOM.render(
  <React.StrictMode>
    {/* app provider contains APP children comp, therefore children needs to be added in context(app provider) */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
