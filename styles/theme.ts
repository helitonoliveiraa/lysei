import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    orange: {
      400: '#F59138',
    },
    pink: {
      500: '#FA5A7D',
    },
    purple: {
      600: '#6A37FF',
    },
    teal: {
      400: '#10C2BF',
    },
    gray: {
      50: '#FAFAFC',
      200: '#EDF3F9',
      400: '#A2AAB2',
      900: '#2B2B47',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.400',
      },
    },
  },
});
