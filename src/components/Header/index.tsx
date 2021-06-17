import Link from 'next/link';
import { Flex, Image, HStack, Icon } from '@chakra-ui/react';
import { FiUser, FiHome, FiLogOut } from 'react-icons/fi';

import { Link as CustomLink } from './Link';

export function Header(): JSX.Element {
  return (
    <Flex w="100%" h="40">
      <Flex maxWidth={1240} w="100%" paddingX="5" marginX="auto" align="center">
        <Image src="/logo.svg" w="40" />

        <Flex ml="auto">
          <HStack spacing="12" mr="32">
            <CustomLink href="/home" icon={FiHome} />

            <CustomLink href="/profile" icon={FiUser} />
          </HStack>

          <Link href="/login">
            <a>
              <Icon
                as={FiLogOut}
                fontSize={28}
                color="orange.400"
                _hover={{ color: 'orange.300' }}
              />
            </a>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
