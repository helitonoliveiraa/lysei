import { useRouter } from 'next/router';
import { Flex, Text, Box, Icon } from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';
import { Button } from './Button';
import { useModal } from '../contexts/ModalContext';

export function SuccessModal(): JSX.Element {
  const navigation = useRouter();
  const { handleSuccessModal } = useModal();

  function handleBackToHome() {
    navigation.push('/home');
    handleSuccessModal();
  }

  return (
    <Flex
      bgColor="purple.600"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={99999}
      align="center"
      justify="center"
    >
      <Flex flexDirection="column" align="center" maxWidth={432}>
        <Box p="5" borderRadius={30} bgColor="purple.400">
          <Icon as={FiCheckCircle} fontSize="7xl" color="gray.50" />
        </Box>
        <Text fontSize="7xl" fontWeight="black" color="gray.50">
          Sucesso
        </Text>

        <Text textAlign="center" color="gray.50" fontSize="2xl" mt="6">
          Seu cadastro foi enviado para validação e em breve será ativado. Agora
          é só aguardar a confirmação!
        </Text>

        <Button bgColor="purple.400" mt="32" onClick={handleBackToHome}>
          Voltar para a Home
        </Button>
      </Flex>
    </Flex>
  );
}
