import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ModeProvider } from './shared/provider/ModeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
