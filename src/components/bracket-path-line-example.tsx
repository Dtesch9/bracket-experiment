import { Flex } from "@chakra-ui/react";
import { PathLine } from "./path-line";

export const BracketLinePathExample = () => {
  return (
    <Flex maxW="250px" maxH="250px">
      <svg width="100%" height="100%" viewBox="0 0 250 250">
        <PathLine
          points={[
            { x: 0, y: 0 },
            { x: 125, y: 0 },
            { x: 125, y: 125 },
            { x: 250, y: 125 },
          ]}
          stroke="red"
          strokeWidth="3"
          fill="none"
          r={10}
        />

        <PathLine
          points={[
            { x: 0, y: 250 },
            { x: 125, y: 250 },
            { x: 125, y: 125 },
            { x: 250, y: 125 },
          ]}
          stroke="red"
          strokeWidth="3"
          fill="none"
          r={10}
        />
      </svg>
    </Flex>
  );
};
