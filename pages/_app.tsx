import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';

import { localeMessages } from '../lib/i18n';

import '@treelab/panda/build/dist/index.css';
import '@treelab/panda/build/dist/modal/Modal/index.css';

/**
 * NOTICE:
 * There is also a global css file in panda
 * we need to ensure that the global css of the project can overwrite other global css
 */
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <IntlProvider messages={localeMessages.zh} locale="zh" defaultLocale="zh">
      <Component {...pageProps} />
    </IntlProvider>
  );
};

export default MyApp;
