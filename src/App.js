//src/App.js
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import GlobalStyle from './styles/global'

function App() {
  const [theme, setTheme] = useState(lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <button onClick={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}>Toggle Theme</button>
    </ThemeProvider>
  )
}
export default App;

