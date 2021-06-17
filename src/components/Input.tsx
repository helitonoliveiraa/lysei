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
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

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

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <FormControl isInvalid={!!error}>
      <Flex width="100%">
        <Flex
          w="50px"
          h="50px"
          border={isFocused || !!error ? '2px solid' : '1px solid'}
          borderRight="none"
          borderLeftRadius="8px"
          borderColor={
            isFocused ? 'purple.600' : error ? 'red.400' : 'gray.200'
          }
          align="center"
          justify="center"
        >
          <Icon
            as={icon}
            fontSize="24"
            color={isFocused ? 'purple.600' : error ? 'red.400' : 'gray.200'}
          />
        </Flex>
        <ChakraInput
          ref={ref}
          name={name}
          flex="1"
          h="50px"
          borderLeftRadius="none"
          borderRightRadius="8px"
          focusBorderColor="purple.600"
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
  );
};

export const Input = forwardRef(InputBase);
