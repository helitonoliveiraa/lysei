import Link from 'next/link';
import { Flex, Text, Image, VStack, Box, Icon } from '@chakra-ui/react';
import {
  FiUser,
  FiBriefcase,
  FiMapPin,
  FiMail,
  FiLock,
  FiArrowLeft,
} from 'react-icons/fi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

type CreateUserData = {
  name: string;
  office: string;
  city: string;
  email: string;
  password: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  office: yup.string().required('Cargo obrigatório'),
  city: yup.string().required('Cidade obrigatória'),
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

  const handleSignUp: SubmitHandler<CreateUserData> = async data => {
    console.log(data);
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
              name="office"
              placeholder="Cargo"
              error={formState.errors.office}
              onChange={register('office').onChange}
              ref={register('office').ref}
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

          <Button type="submit" mt="36" isLoading={formState.isSubmitting}>
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
