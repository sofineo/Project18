import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
  color: ${({ theme }) => theme.COLORS.WHITE}
}

body, input, button, textarea {
  font-size: 1.6rem;
  outline: none;
  font-family: 'Roboto Slab', serif;
}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}
`