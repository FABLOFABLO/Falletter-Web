import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://font.elice.io/css?family=Elice+DX+Neolli');

  :root {
    color-scheme: dark;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    margin: 0;
  }

  body {
    background: #0b0b0d;
    color: rgba(255, 255, 255, 0.92);
    font-family:
      Pretendard,
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      ui-sans-serif,
      system-ui,
      sans-serif;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    color: inherit;
  }
`