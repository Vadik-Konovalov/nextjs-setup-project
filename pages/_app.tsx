import { GlobalStyle } from 'styles/global';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
  },

  fonts: {
    primary: 'var(--montserrat-font), sans-serif',
  },

  responsive: {
    mobile: '@media (max-width: 320px)',
    tablet: '@media (min-width: 768px)',
    tabletL: '@media (min-width: 1024px)',
    laptop: '@media (min-width: 1366px)',
    desktop: '@media (min-width: 1680px)',
    desktopL: '@media (min-width: 1920px)',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
