import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * , *::after,  *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #020101;
  }
`

export default GlobalStyles
