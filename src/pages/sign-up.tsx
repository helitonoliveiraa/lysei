import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Flex,
  Text,
  Image,
  VStack,
  Box,
  Icon,
  useToast,
} from '@chakra-ui/react';
import {
  FiUser,
  FiBriefcase,
  FiMapPin,
  FiMail,
  FiLock,
  FiArrowLeft,
  FiHash,
} from 'react-icons/fi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../services/api';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

type CreateUserData = {
  name: string;
  occupation: string;
  cpf: string;
  city: string;
  state: string;
  email: string;
  password: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  occupation: yup.string().required('Cargo obrigatório'),
  cpf: yup.string().required('CPF obrigatório'),
  city: yup.string().required('Cidade obrigatória'),
  state: yup.string().required('Estado obrigatória'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup
    .string()
    .min(6, 'No mínino 6 caracteres')
    .required('Senha obrigatória'),
});

export default function SignUp(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<CreateUserData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const navigation = useRouter();
  const toast = useToast();

  const handleSignUp: SubmitHandler<CreateUserData> = async data => {
    try {
      await api.post('users', {
        ...data,
        isPolitician: 'true',
      });

      toast({
        status: 'success',
        title: 'Successo!',
        description: 'Cadastro realizado com sucesso!',
        duration: 3000,
        isClosable: true,
      });

      navigation.back();
    } catch (err) {
      toast({
        status: 'error',
        title: 'Falha!',
        description:
          'Ocorreu uma falha ao realizar o seu cadastro, tente novamente!',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex align="center" justify="center" w="100vw" h="100vh">
      <Box paddingX="40" paddingY="16" borderRadius="16" boxShadow="lg">
        <Flex
          as="form"
          width="100%"
          maxWidth={326}
          flexDirection="column"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <Image src="/logo.svg" w="48" alignSelf="center" />

          <Text
            mt="12"
            textAlign="justify"
            paddingX="5"
            fontSize="md"
            color="gray.400"
          >
            Preencha as informações a seguir e clique em cadastrar para
            prosseguir.
          </Text>

          <VStack mt="8" spacing="4">
            <Input
              icon={FiUser}
              name="name"
              placeholder="nome"
              error={formState.errors.name}
              onChange={register('name').onChange}
              ref={register('name').ref}
            />

            <Input
              icon={FiBriefcase}
              name="occupation"
              placeholder="Cargo"
              error={formState.errors.occupation}
              onChange={register('occupation').onChange}
              ref={register('occupation').ref}
            />

            <Input
              icon={FiHash}
              name="cpf"
              placeholder="CPF"
              error={formState.errors.cpf}
              onChange={register('cpf').onChange}
              ref={register('cpf').ref}
            />

            <Input
              icon={FiMapPin}
              name="city"
              placeholder="Cidade"
              error={formState.errors.city}
              onChange={register('city').onChange}
              ref={register('city').ref}
            />

            <Input
              icon={FiMapPin}
              name="state"
              placeholder="Estado"
              error={formState.errors.state}
              onChange={register('state').onChange}
              ref={register('state').ref}
            />

            <Input
              icon={FiMail}
              name="email"
              type="email"
              placeholder="E-mail"
              error={formState.errors.email}
              onChange={register('email').onChange}
              ref={register('email').ref}
            />

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
              error={formState.errors.password}
              onChange={register('password').onChange}
              ref={register('password').ref}
            />
          </VStack>

          <Button type="submit" mt="12" isLoading={formState.isSubmitting}>
            CADASTRAR
          </Button>
        </Flex>

        <Link href="/">
          <a>
            <Text
              textAlign="center"
              fontSize="xl"
              fontWeight="black"
              color="purple.500"
              mt="8"
              _hover={{
                color: 'purple.700',
              }}
            >
              <Icon as={FiArrowLeft} fontSize="24" mr="2" />
              Voltar para login
            </Text>
          </a>
        </Link>
      </Box>
    </Flex>
  );
}
