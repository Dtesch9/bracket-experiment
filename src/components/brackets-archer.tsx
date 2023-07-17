import { Flex, Tag } from "@chakra-ui/react";
import { ArcherContainer, ArcherElement } from "react-archer";
import { TEAM_COUNT, generateRounds, lineCoords, sliceTeamsFromRoundIndex } from "../utils/brackets";

const ROW_GAP = 16;

export const BracketsArcher = () => {
  return (
    <>
      {/* Rows (Header) */}
      <Flex gap={ROW_GAP}>
        {generateRounds().map((round) => (
          <Tag id={round.toString()} key={round} w="32" bgColor="purple.900">
            Team {round}
          </Tag>
        ))}
      </Flex>

      {/* Painting all possible brackets */}
      <ArcherContainer style={{ marginTop: "32px" }} strokeColor="rgba(65, 65, 66, 1)" lineStyle="angle">
        <Flex gap={ROW_GAP}>
          {/* Rows (rounds) */}
          {generateRounds().map((round, index) => (
            <Flex key={round} direction="column" gap="16" justify="space-around" zIndex="1">
              {/* Columns (Teams) */}
              {sliceTeamsFromRoundIndex(TEAM_COUNT, index).map((match) => {
                const key = `${round}-${match}`;
                const coords = lineCoords();
                const lineCoord = coords[key];

                return (
                  <ArcherElement
                    key={key}
                    id={`${round}-${match}`}
                    relations={[
                      {
                        targetId: lineCoord?.end,
                        targetAnchor: "left",
                        sourceAnchor: "right",
                        style: { endMarker: false },
                      },
                    ]}
                  >
                    <Flex key={key} id={`${round}-${match}`} direction="column">
                      <Tag w="32" h="8" _hover={{ bgColor: "yellow", color: "black" }}>
                        {`${round}-${match}`}
                      </Tag>

                      <Tag w="32" h="8" _hover={{ bgColor: "yellow", color: "black" }}>
                        {`${round}-${match}`}
                      </Tag>
                    </Flex>
                  </ArcherElement>
                );
              })}
            </Flex>
          ))}
        </Flex>
      </ArcherContainer>
    </>
  );
};
