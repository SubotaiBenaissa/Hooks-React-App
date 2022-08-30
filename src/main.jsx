import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { HooksApp } from './HooksApp';
import { CounterApp, CounterHook } from './usestate';
import { FormComponent, FormHook } from './useffect';
import { CustomHooks } from './ejemplos';
import { RefComponent } from './useref/RefComponent';
import { LayoutComponent } from './uselayouteffect/LayoutComponent';
import { MemoComponent, MemoHook } from './memos';
import { CallbackHook } from './memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';
import { TodoComponent } from './reducer/TodoComponent';
import { MainApp } from './usecontext/MainApp';

import './reducer/introReducer';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <HooksApp />
        <CounterApp />
        <CounterHook />
        <FormComponent />
        <FormHook />
        <CustomHooks />
        <RefComponent />
        <LayoutComponent />
        <MemoComponent />
        <MemoHook />
        <CallbackHook />
        <Padre />
        <TodoComponent />
        <MainApp />
    </BrowserRouter>
  </React.StrictMode>
)
