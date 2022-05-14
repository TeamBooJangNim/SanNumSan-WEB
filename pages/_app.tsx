import '../styles/globals.scss';
import '../styles/san-detail.scss';
import '../styles/prove-detail.scss';
import '../component/FloatingModal/FloatingModal.scss';
import '../component/BottomSheetModal/BottomSheetModal.scss';

import type { AppProps } from 'next/app';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
