import '../styles/globals.css';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import network from '../utils/network';

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={network}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
