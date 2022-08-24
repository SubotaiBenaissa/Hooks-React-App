import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp';
import { CounterApp, CounterHook } from './usestate';
import { FormComponent, FormHook } from './useffect';
import { CustomHooks } from './ejemplos';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <>
    <HooksApp />
    <CounterApp />
    <CounterHook />
    <FormComponent />
    <FormHook />
    <CustomHooks />
  </>
  </React.StrictMode>
)
