'use client'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html { 
    scroll-behavior: smooth; 
  }
  body {
    margin: 0;
    padding: 0;
    &, & * {
      font-family: 'Montserrat', sans-serif;
      box-sizing: border-box;
    }
    #root {
      height: 100vh;
    }
    h2 {
      font-size: 22px;
    }
    h3 {
      font-size: 20px;
    }
    h4 {
      font-size: 18px;
    }
    p, span, a {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: #6C6C6C;
        margin: 0;
    }
}
`

export default GlobalStyle