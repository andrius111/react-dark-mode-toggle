import React from 'react'
import { ThemeProvider } from 'styled-components'
import useDarkMode from './support/useDarkMode'

import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global'

import Toggle from './components/Toggle'

const App = () => {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />  

      <Toggle theme={ theme } toggleTheme={ toggleTheme } />

      <h1>It's a { theme } theme!</h1>

      <footer>
        <span>Credits:</span>
        <small><b>Sun</b> icon made by <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
        <small><b>Moon</b> icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
      </footer>
    </ThemeProvider>
  )
}

export default App;
