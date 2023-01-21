import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyle from './styles/global';
import App from './App';
import './index.css';


const theme = localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme;

// Only called once on the top-level component and it's children will automatically be rendered
ReactDOM.render( // Used to render components. In this example, ThemeProvider component is rendered with children GlobalStyle and App to the DOM element id='root'
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root') // Root container for your react app in your index.html
);

