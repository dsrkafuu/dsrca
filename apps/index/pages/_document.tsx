import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import {
  FAVICON__FAVICON_ICO as icoIcon,
  FAVICON__PWA_192X192_PNG as pwa192Icon,
  FAVICON__PWA_512X512_PNG as pwa512Icon,
  FAVICON__APPLE_TOUCH_ICON_PNG as appleIcon,
} from '@dsrca/cdn';

const fonts = [
  'Inter:wght@400;500;700',
  'Noto+Sans+SC:wght@400;500;700',
  'Noto+Sans+JP:wght@400;500;700',
].map((font) => {
  return `https://fonts.googleapis.com/css2?display=swap&family=${font}`;
});

function Document() {
  return (
    <Html>
      <Head>
        {fonts.map((font) => {
          return <link key={font} rel='stylesheet' href={font} />;
        })}
        <link rel='icon' sizes='any' href={icoIcon} />
        <link rel='icon' sizes='192x192' href={pwa192Icon} />
        <link rel='icon' sizes='512x512' href={pwa512Icon} />
        <link rel='apple-touch-icon' sizes='180x180' href={appleIcon} />
        <meta name='author' content='DSRKafuU' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
