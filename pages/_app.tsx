import type { AppProps } from 'next/app';
import '../component/BottomSheetModal/BottomSheetModal.scss';
import '../component/FloatingModal/FloatingModal.scss';
import { wrapper } from '../store';
import '../styles/globals.scss';
import '../styles/prove-detail.scss';
import '../styles/reset.scss';
import '../styles/san-detail.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
