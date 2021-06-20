import { Flex, Text, Box } from '@chakra-ui/react';
import { Button } from './Button';
import { useModal } from '../contexts/ModalContext';

export function EditModal(): JSX.Element {
  const { handleEditModal } = useModal();

  return (
    <Flex
      bgColor="rgba(0, 0, 0, 0.6)"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={99999}
      align="center"
      justify="center"
    >
      <Box
        align="center"
        maxWidth={432}
        p={50}
        borderRadius={20}
        bgColor="white"
      >
        <Text fontSize="2xl" fontWeight="black" color="gray.900">
          Editar ocorrência
        </Text>

        <Text textAlign="center" color="gray.400" fontSize="md" mt="3">
          Deseja marcar ocorrência como concluída?
        </Text>

        <Flex mt="10" w="100%" justify="space-between" paddingX="1">
          <Button bgColor="purple.600" w={140}>
            Salva
          </Button>

          <Button
            bgColor="gray.400"
            _hover={{
              bgColor: 'gray.500',
            }}
            w={140}
            onClick={() => handleEditModal()}
          >
            Cancelar
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
