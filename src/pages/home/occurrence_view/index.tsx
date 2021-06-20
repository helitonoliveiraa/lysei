import {
  Flex,
  Box,
  Text,
  SimpleGrid,
  Image,
  Icon,
  Button,
} from '@chakra-ui/react';
import { FiMapPin, FiThumbsUp, FiEdit } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { Header } from '../../../components/Header';
import { useModal } from '../../../contexts/ModalContext';

// import mapMarkerImg from '../../../assets/map-marker.svg';

export default function OccurenceView(): JSX.Element {
  const { handleEditModal } = useModal();
  return (
    <>
      <Header />

      <Box w="100%" h="vh - 40">
        <SimpleGrid
          maxWidth={1240}
          w="100%"
          marginX="auto"
          paddingX="5"
          flex="1"
          minChildWidth="300px"
          justifyContent="center"
          gap="7"
        >
          <Box boxShadow="lg" borderRadius={20} pt="12">
            <Box paddingX="8">
              <Flex align="center" justify="space-between" w="100%">
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

                <Button
                  bgColor="transparent"
                  _hover={{ bgColor: 'purple.100' }}
                  w="2"
                  onClick={() => handleEditModal()}
                >
                  <Icon as={FiEdit} fontSize="2xl" color="purple.600" />
                </Button>
              </Flex>

              <SimpleGrid mt="16" w="100%" minChildWidth="250px" gap="3">
                <Image
                  src="https://images.unsplash.com/photo-1562797807-aa9baed9a414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
                  w={280}
                  h={200}
                  objectFit="cover"
                  borderRadius={8}
                />

                <Image
                  src="https://images.unsplash.com/photo-1562797807-aa9baed9a414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
                  w={280}
                  h={200}
                  objectFit="cover"
                  borderRadius={8}
                />
              </SimpleGrid>

              <Flex align="center" mt={8}>
                <Flex align="center" justify="center">
                  <Button
                    bgColor="transparent"
                    _hover={{ bgColor: 'orange.100' }}
                    w="2"
                  >
                    <Icon as={FiThumbsUp} fontSize="2xl" color="orange.400" />
                  </Button>
                  <Text
                    fontSize="xl"
                    color="orange.400"
                    fontWeight="black"
                    ml="3"
                  >
                    356
                  </Text>
                </Flex>

                <Flex
                  ml="6"
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

              <Text fontSize="2xl" fontWeight="black" color="gray.900" mt="9">
                Burado
              </Text>

              <Text mt="5" fontSize="lg" textAlign="justify" color="gray.400">
                Há tempos que esse buraco está atrapalhando o tráfego na rua,
                porém, com a temporada de chuvas ele acabou aumentando ainda
                mais, deixando esse ponto muito perigoso.
              </Text>
            </Box>

            <Flex
              h="24"
              mt="5"
              align="center"
              justify="center"
              bgColor="gray.100"
            >
              <Icon as={FiMapPin} fontSize="2xl" color="purple.600" />
              <Text ml="5" fontSize="md" color="gray.900">
                Rua 13 de Maio, Centro - São José do Rio Pardo - SP
              </Text>
            </Flex>
          </Box>

          <Box boxShadow="lg" borderRadius={20}>
            <MapContainer
              center={[-22.701093, -43.531849]}
              zoom={15}
              style={{ width: '100%', height: '100%', borderRadius: '20px' }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker position={[-22.701093, -43.531849]}>
                <Popup
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                  className="map-popup"
                />
              </Marker>
            </MapContainer>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
