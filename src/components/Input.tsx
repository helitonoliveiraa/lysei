import {
  ElementType,
  useState,
  ForwardRefRenderFunction,
  forwardRef,
  ForwardedRef,
} from 'react';
import {
  Flex,
  Input as ChakraInput,
  Icon,
  InputProps as ChakraInputProps,
  FormErrorMessage,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { useRouter } from 'next/router';

type InputProps = ChakraInputProps & {
  icon: ElementType;
  name: string;
  error?: FieldError;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { icon, name, error = null, ...rest },
  ref: ForwardedRef<HTMLInputElement>,
): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);

  const { asPath } = useRouter();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <>
      {asPath === '/' ? (
        <FormControl isInvalid={!!error}>
          <Flex width="100%">
            <FormLabel
              htmlFor={name}
              w="50px"
              h="50px"
              mr="0"
              borderRight="2px solid"
              borderRightColor="purple.600"
              borderLeftRadius="8px"
              bgColor="gray.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon
                as={icon}
                fontSize="24"
                color="purple.600"
                display="block"
              />
            </FormLabel>
            <ChakraInput
              ref={ref}
              id={name}
              name={name}
              flex="1"
              h="50px"
              borderLeftRadius="none"
              borderRightRadius="8px"
              focusBorderColor="purple.600"
              bgColor="gray.100"
              color="gray.400"
              _placeholder={{
                fontSize: 'md',
                color: 'gray.300',
              }}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              {...rest}
            />
          </Flex>

          {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      ) : (
        <FormControl isInvalid={!!error}>
          <Flex width="100%">
            <FormLabel
              htmlFor={name}
              w="50px"
              h="50px"
              mr="0"
              border={isFocused || !!error ? '2px solid' : '1px solid'}
              borderRight={asPath === '/' ? '1px solid' : 'none'}
              borderRightColor="purple.600"
              borderLeftRadius="8px"
              borderColor={
                isFocused ? 'purple.600' : error ? 'red.400' : 'gray.200'
              }
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon
                as={icon}
                fontSize="24"
                color={
                  isFocused ? 'purple.600' : error ? 'red.400' : 'gray.200'
                }
                display="block"
              />
            </FormLabel>
            <ChakraInput
              ref={ref}
              id={name}
              name={name}
              flex="1"
              h="50px"
              borderLeftRadius="none"
              borderRightRadius="8px"
              focusBorderColor="purple.600"
              color="gray.400"
              _placeholder={{
                fontSize: 'md',
                color: 'gray.300',
              }}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              {...rest}
            />
          </Flex>

          {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      )}
    </>
  );
};

export const Input = forwardRef(InputBase);
