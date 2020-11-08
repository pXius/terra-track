import { createGlobalStyle } from 'styled-components';

// CSS styling that will affect children components of the ThemeProvider.
export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
  box-sizing: border-box;
}

.nav-bar,
.body,
.footer {
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}

.app-name {
  color: ${({ theme }) => theme.title};
}

.nav-bar {
  border-bottom: 1px solid ${({ theme }) => theme.line};
}

.footer {
  border-top: 1px solid ${({ theme }) => theme.line};
}

a,
.ui.button {
  color: rgba(0, 0, 0, 0.7) ;
}

`;
