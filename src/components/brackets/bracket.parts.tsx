import { Flex, FlexProps } from '@chakra-ui/react';

export const BracketsMatch = (props: FlexProps) => {
  return <Flex direction="column" {...props} />;
};

export const BracketsTeam = (props: FlexProps) => {
  return (
    <Flex
      w="full"
      h="8"
      bgColor="gray.700"
      rounded="lg"
      justify="center"
      align="center"
      _hover={{ bgColor: 'yellow', color: 'black' }}
      {...props}
    />
  );
};
