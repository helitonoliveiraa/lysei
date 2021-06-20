import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ModalContextProvider } from '../contexts/ModalContext';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <ModalContextProvider>
        <Component {...pageProps} />
      </ModalContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
