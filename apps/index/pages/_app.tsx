import '@dsrca/react/es/index.css';
import '../styles/global.scss';
import type { AppProps } from 'next/app';
import React from 'react';
import SakanaWidget from '../components/SakanaWidget';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SakanaWidget />
    </>
  );
}

export default App;
