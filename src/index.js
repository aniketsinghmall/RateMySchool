import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { lightTheme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './services/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <MantineProvider theme={lightTheme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </MantineProvider>
  </Provider>
);
