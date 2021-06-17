import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

type ChakraButtonProps = ButtonProps & {
  children: string;
};

export function Button({ children, ...rest }: ChakraButtonProps): JSX.Element {
  return (
    <ChakraButton
      borderRadius={30}
      size="lg"
      bg="purple.600"
      color="gray.50"
      fontWeight="900"
      fontSize="md"
      _hover={{
        bg: 'purple.700',
      }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}
