import Link from 'next/link';
import { Text, Flex, Image, VStack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiMail, FiLock } from 'react-icons/fi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

type SignInFormData = {
  email: string;
  password: string;
};

const createUserFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup
    .string()
    .min(6, 'No mínino 6 caracteres')
    .required('Senha obrigatória'),
});

export default function Home(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async data => {
    console.log(data);
  };

  return (
    <Flex w="100%" h="100vh">
      <Flex
        maxWidth={440}
        w="100%"
        h="100vh"
        flexDirection="column"
        alignItems="center"
        justify="center"
        paddingX="12"
        bgColor="purple.600"
      >
        <Text fontSize="4xl" fontWeight="black" color="gray.50" mb="12">
          Faça seu login
        </Text>

        <Flex
          as="form"
          w="100%"
          flexDirection="column"
          justify="center"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <VStack spacing="4">
            <Input
              icon={FiMail}
              type="email"
              name="email"
              placeholder="E-mail"
              color="purple.600"
              _placeholder={{
                color: 'gray.400',
              }}
              error={formState.errors.email}
              onChange={register('email').onChange}
              ref={register('email').ref}
            />

            <Input
              icon={FiLock}
              type="password"
              name="password"
              placeholder="Senha"
              color="purple.600"
              _placeholder={{
                color: 'gray.400',
              }}
              error={formState.errors.password}
              onChange={register('password').onChange}
              ref={register('password').ref}
            />
          </VStack>

          <Button
            type="submit"
            bgColor="orange.400"
            _hover={{
              bgColor: 'orange.500',
            }}
            mt="8"
            isLoading={formState.isSubmitting}
          >
            ENTRAR
          </Button>
        </Flex>

        <Link href="/sign-up">
          <a>
            <Text
              fontSize="xl"
              fontWeight="black"
              color="gray.50"
              mt="8"
              _hover={{
                color: 'gray.200',
                textDecoration: 'underline',
              }}
            >
              Cadastre-se
            </Text>
          </a>
        </Link>
      </Flex>

      <Flex flex="1" flexDirection="column" align="center" justify="center">
        <Image src="/logo.svg" alt="Logo" maxWidth={316} />

        <Image src="/banner.png" alt="Banner" maxWidth={690} mt="40" />

        <Text
          mt="12"
          fontSize="2xl"
          color="gray.400"
          textAlign="center"
          maxWidth={490}
        >
          Acompanhe as solicitações dos munícipes e ajude na resolução dos
          principais problemas que afetam a sua cidade.
        </Text>
      </Flex>
    </Flex>
  );
}
