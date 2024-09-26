import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, deepPurple } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: purple,
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

