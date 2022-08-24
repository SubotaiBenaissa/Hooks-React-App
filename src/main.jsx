import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp';
import { CounterApp } from './usestate/CounterApp';
import { CounterHook } from './usestate/CounterHook';
import { FormComponent } from './useffect/FormComponent';
import { FormHook } from './useffect/FormHook';
import { CustomHooks } from './ejemplos/CustomHooks';
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
