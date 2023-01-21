//global.js
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    &:hover {
      background-color: ${props => props.theme.hover};
    }
  }
`;

