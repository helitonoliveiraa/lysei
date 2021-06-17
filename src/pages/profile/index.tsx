import { Flex, Text, VStack } from '@chakra-ui/react';
import { FiUser, FiBriefcase, FiMapPin, FiMail, FiLock } from 'react-icons/fi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

type UpdateProfileData = {
  name: string;
  office: string;
  city: string;
  email: string;
  password: string;
};

const updateProfileFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  office: yup.string().required('Cargo obrigatório'),
  city: yup.string().required('Cidade obrigatória'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup
    .string()
    .min(6, 'No mínino 6 caracteres')
    .required('Senha obrigatória'),
});

export default function Profile(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<UpdateProfileData>({
    resolver: yupResolver(updateProfileFormSchema),
  });

  const handdleUpdateProfile: SubmitHandler<UpdateProfileData> = async data => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <Flex align="center" justify="center" w="100vw" h="100vh - 40">
        <Flex paddingX="40" paddingY="16" borderRadius="16" boxShadow="lg">
          <Flex
            as="form"
            width="100%"
            maxWidth={326}
            flexDirection="column"
            onSubmit={handleSubmit(handdleUpdateProfile)}
          >
            <Text
              fontSize="4xl"
              textAlign="center"
              fontWeight="black"
              color="gray.900"
            >
              Dados do Perfil
            </Text>
            <Text
              mt="3"
              textAlign="center"
              paddingX="5"
              fontSize="md"
              color="gray.400"
            >
              Preencha as informações a seguir e clique em atualizar perfil.
            </Text>

            <VStack mt="20" spacing="4">
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

            <Button type="submit" mt="20" isLoading={formState.isSubmitting}>
              ATUALIZAR PERFIL
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
