import '../styles/globals.css';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import network from '../utils/network';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={network}>
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  );
}

export default MyApp;
