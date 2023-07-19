import { Flex } from '@chakra-ui/react';
import { BracketsDouglasLines } from './components/brackets-douglas-lines';

// Console warnings are made because of metamask, looks like it's triggering it's anti-phishing mechanism
// https://stackoverflow.com/questions/76393186/what-is-causing-the-warning-removing-intrinsics-arrayprototype-toreversed-in
// https://github.com/MetaMask/eth-phishing-detect/issues/11900

export const App = () => {
  return (
    <Flex as="main" direction="column" w="full" minH="100vh" p="4" justify="center" align="center">
      <BracketsDouglasLines />
    </Flex>
  );
};
