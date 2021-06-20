import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { ModalContextProvider } from '../contexts/ModalContext';
import { AuthProvider } from '../contexts/AuthContext';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <AuthProvider>
        <ModalContextProvider>
          <Component {...pageProps} />
        </ModalContextProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
