import { createGlobalStyle } from 'styled-components'
// Works but I don't know about FOUT
// import { typeface } from '../node_modules/typeface-source-sans-pro/index.css'

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
  }
  /* ${typeface} */
`

export default GlobalStyles
