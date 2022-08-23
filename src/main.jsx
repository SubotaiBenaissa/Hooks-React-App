import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp';
import { CounterApp } from './usestate/CounterApp';
import { CounterHook } from './usestate/CounterHook';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksApp />
    <CounterApp />
    <CounterHook />
  </React.StrictMode>
)
