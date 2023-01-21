//src/App.js
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import GlobalStyle from './styles/global'
import './App.css';

function App() {
  const [theme, setTheme] = useState(lightTheme)

  return (
    <div className="app">
        <ThemeProvider className="toggle-button" theme={theme}>
          <GlobalStyle />
          <button onClick={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}>Toggle Theme</button>
        </ThemeProvider>
        
      <div className="intro-container">
        <div className="desc-container">
          <h1>I am a Web Developer!</h1>
        </div>
        <div className="img-container"></div>
      </div>
      <footer/>
    </div>
      
  )
}
export default App;

