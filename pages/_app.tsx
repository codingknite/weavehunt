import { createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';
import { Space_Grotesk } from '@next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const GlobalStyles = createGlobalStyle`
  html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={spaceGrotesk.className}>
      <GlobalStyles />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
