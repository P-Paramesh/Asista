import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';                         
import {ChakraProvider, extendTheme } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <App />
</React.StrictMode>
)
reportWebVitals();

