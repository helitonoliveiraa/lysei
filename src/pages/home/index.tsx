import { Box, SimpleGrid } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { getAPIClient } from '../../services/axios';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

import { api } from '../../services/api';

type Post = {
  id: string;
  author_id: string;
  city: string;
  description: string;
  district: string;
  likes: number;
  latitude: number;
  longitude: number;
  number: number;
  solved: boolean;
  state: string;
  street: string;
  title: string;
};

type CardPosts = {
  posts: Post[];
};

export default function Home(): JSX.Element {
  const [posts, setPosts] = useState<Post[] | null>();

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.post('posts/list', {
        state: 'SP',
        city: 'Taubaté',
      });

      setPosts(data);
    }

    loadUsers();
  }, []);

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
          {posts?.map(post => (
            <Card key={post.id} post={post} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const apiClient = getAPIClient(context);
  const { 'lysei:token': token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
