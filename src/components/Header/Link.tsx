import {
  Icon,
  Link as ChakraLink,
  LinkProps as CrakraLinkProps,
} from '@chakra-ui/react';
import { ElementType } from 'react';
import { ActiveLink } from '../ActiveLink';

type NavLinkProps = CrakraLinkProps & {
  icon: ElementType;
  href: string;
};

export function Link({ icon, href, ...rest }: NavLinkProps): JSX.Element {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink {...rest} _hover={{ color: 'purple.600' }}>
        <Icon as={icon} fontSize={28} />
      </ChakraLink>
    </ActiveLink>
  );
}
