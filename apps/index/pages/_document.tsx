import { Html, Head, Main, NextScript } from 'next/document';
import {
  FAVICON__FAVICON_ICO,
  FAVICON__PWA_192X192_PNG,
  FAVICON__PWA_512X512_PNG,
  FAVICON__APPLE_TOUCH_ICON_PNG,
} from '@dsrca/cdn';

function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='stylesheet'
          href='http://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500;700'
        />
        <link
          rel='stylesheet'
          href='http://fonts.googleapis.com/css2?display=swap&family=Noto+Sans+SC:wght@400;500;700'
        />
        <link
          rel='stylesheet'
          href='http://fonts.googleapis.com/css2?display=swap&family=Noto+Sans+JP:wght@400;500;700'
        />
        <link rel='icon' sizes='any' href={FAVICON__FAVICON_ICO} />
        <link rel='icon' sizes='192x192' href={FAVICON__PWA_192X192_PNG} />
        <link rel='icon' sizes='512x512' href={FAVICON__PWA_512X512_PNG} />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={FAVICON__APPLE_TOUCH_ICON_PNG}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
