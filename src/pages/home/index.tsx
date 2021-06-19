import { Box, SimpleGrid } from '@chakra-ui/react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Box maxWidth={1240} paddingX="5" mb="10" w="100%" marginX="auto">
        <SimpleGrid
          maxWidth={1240}
          w="100%"
          marginX="auto"
          flex="1"
          minChildWidth="300px"
          justifyContent="center"
          gap="7"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </Box>
    </>
  );
}
