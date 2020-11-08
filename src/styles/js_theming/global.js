import { createGlobalStyle } from 'styled-components';

// CSS styling that will affect children components of the ThemeProvider.
export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.bodyColor};
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

.parcel-item-div {
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.line};
  color: ${({ theme }) => theme.text};
}

.parcel-item-div:hover {
  background: ${({ theme }) => theme.hover};
  color: ${({ theme }) => theme.text};
}
.parcel-page-card {
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.line};
  color: ${({ theme }) => theme.text};
}

.maps {
  border-top: 2px solid ${({ theme }) => theme.line};
}

`;
