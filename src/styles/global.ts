import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #eeeeee;
    --highlight: #64ffda;
    --pink: #b957ce;
    --background: #0a192f;
    --darkblue: #3a4e93;
    --lilac: #5c58b6;

    --container: 100rem;

    --small:1.5rem;
    --medium:3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background: var(--background);
    color: var(--white);
  }

  p, a {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-left: 25px;
  }

  .Typist {
    color: var(--lilac);
    font-size: 76px;
  }

  .Typist .Cursor--blinking {
    color: var(--white);
  }
`

export default GlobalStyles
