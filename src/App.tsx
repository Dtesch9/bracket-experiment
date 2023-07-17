import { Flex } from "@chakra-ui/react";
import { BracketsDouglasLines } from "./components/brackets-douglas-lines";

export const App = () => {
  return (
    <Flex as="main" direction="column" w="full" minH="100vh" p="4" justify="center" align="center">
      <BracketsDouglasLines />
    </Flex>
  );
};
