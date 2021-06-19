import { Box, Flex, Text, Image, Icon, Button } from '@chakra-ui/react';
import { FiThumbsUp } from 'react-icons/fi';

import { CardSlide } from './CardSlide';

const images = [
  'https://images.unsplash.com/photo-1562797807-aa9baed9a414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80',
  'https://images.unsplash.com/photo-1584696049838-8e692282a2e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];

export function Card(): JSX.Element {
  return (
    <Box maxWidth={420} w="100%" p="9" boxShadow="lg" borderRadius={20}>
      <Flex align="center">
        <Image
          src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          w="14"
          h="14"
          borderRadius="full"
          objectFit="cover"
        />

        <Box ml="4">
          <Text fontSize="xl" fontWeight="black" color="gray.900">
            Héliton Oliveira
          </Text>
          <Text fontSize="md" color="gray.400">
            São José do Rio Pardo - SP
          </Text>
        </Box>
      </Flex>

      <Box mt="5">
        <Text fontSize="2xl" fontWeight="black" color="gray.900" mb="5">
          Buraco
        </Text>

        <CardSlide imageURL={images} />
      </Box>

      <Flex align="center" justify="space-between" mt={8}>
        <Flex align="center" justify="center">
          <Button
            bgColor="transparent"
            _hover={{ bgColor: 'orange.100' }}
            w="2"
          >
            <Icon as={FiThumbsUp} fontSize="2xl" color="orange.400" />
          </Button>
          <Text fontSize="xl" color="orange.400" fontWeight="black" ml="3">
            356
          </Text>
        </Flex>

        <Flex
          border="1px solid"
          borderColor="pink.500"
          bgColor="pink.200"
          borderRadius={30}
          paddingX={4}
        >
          <Text fontSize="sm" color="pink.500">
            Pendente
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
