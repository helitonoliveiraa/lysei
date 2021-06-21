import { useEffect, useState } from 'react';
import { Flex, Text, useToast, VStack } from '@chakra-ui/react';
import {
  FiUser,
  FiBriefcase,
  FiMapPin,
  FiMail,
  FiLock,
  FiHash,
} from 'react-icons/fi';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

type UpdateProfileData = {
  name: string;
  cpf: string;
  office: string;
  occupation: string;
  state: string;
  city: string;
  email: string;
  password: string;
};

const updateProfileFormSchema = yup.object().shape({
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

export default function Profile(): JSX.Element {
  const [profile, setProfile] = useState<UpdateProfileData | null>(null);

  const { register, handleSubmit, formState } = useForm<UpdateProfileData>({
    resolver: yupResolver(updateProfileFormSchema),
  });

  const toast = useToast();

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get('users/profile');

      setProfile(data);
    }

    loadUsers();
  }, []);

  const handdleUpdateProfile: SubmitHandler<UpdateProfileData> = async data => {
    try {
      await api.patch('users', data);

      toast({
        status: 'success',
        title: 'Successo!',
        description: 'Cadastro realizado com sucesso!',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        status: 'error',
        title: 'Falha!',
        description:
          'Ocorreu uma falha ao atualizar o seus dados, tente novamente!',
        duration: 3000,
        isClosable: true,
      });
    }
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
                defaultValue={profile?.name}
              />

              <Input
                icon={FiBriefcase}
                name="occupation"
                placeholder="Cargo"
                error={formState.errors.occupation}
                onChange={register('occupation').onChange}
                ref={register('occupation').ref}
                defaultValue={profile?.occupation}
              />

              <Input
                icon={FiHash}
                name="cpf"
                placeholder="CPF"
                error={formState.errors.cpf}
                onChange={register('cpf').onChange}
                ref={register('cpf').ref}
                defaultValue={profile?.cpf}
              />

              <Input
                icon={FiMapPin}
                name="city"
                placeholder="Cidade"
                error={formState.errors.city}
                onChange={register('city').onChange}
                ref={register('city').ref}
                defaultValue={profile?.city}
              />

              <Input
                icon={FiMapPin}
                name="state"
                placeholder="Estado"
                error={formState.errors.state}
                onChange={register('state').onChange}
                ref={register('state').ref}
                defaultValue={profile?.state}
              />

              <Input
                icon={FiMail}
                name="email"
                type="email"
                placeholder="E-mail"
                error={formState.errors.email}
                onChange={register('email').onChange}
                ref={register('email').ref}
                defaultValue={profile?.email}
              />

              {/* <Input
                icon={FiLock}
                name="password"
                type="password"
                placeholder="Senha"
                error={formState.errors.password}
                onChange={register('password').onChange}
                ref={register('password').ref}
                defaultValue={profile?.password}
              /> */}
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
