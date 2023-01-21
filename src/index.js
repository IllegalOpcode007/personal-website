import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyle from './styles/global';
import App from './App';

const theme = localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

