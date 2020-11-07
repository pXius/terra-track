import { createGlobalStyle } from 'styled-components';

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

  `;
