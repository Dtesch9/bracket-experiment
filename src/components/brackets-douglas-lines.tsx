import { Flex, Tag } from "@chakra-ui/react";
import { Fragment } from "react";
import { DTeschLinePath } from "./dtesch-line-path";
import { TEAM_COUNT, generateRounds, lineCoords, sliceTeamsFromRoundIndex } from "../utils/brackets";

const ROW_GAP = 16;

export const BracketsDouglasLines = () => {
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
      <Flex gap={ROW_GAP} mt="4">
        {/* Rows (rounds) */}
        {generateRounds().map((round, index) => (
          <Flex key={round} direction="column" gap="16" justify="space-around" zIndex="1">
            {/* Columns (Teams) */}
            {sliceTeamsFromRoundIndex(TEAM_COUNT, index).map((match) => {
              const key = `${round}-${match}`;
              const coords = lineCoords();
              const lineCoord = coords[key];

              return (
                <Fragment key={key}>
                  {lineCoord && (
                    <DTeschLinePath
                      startPointId={lineCoord.start}
                      endPointId={lineCoord.end}
                      color="rgba(65, 65, 66, 1)"
                    />
                  )}

                  <Flex id={key} key={key} direction="column">
                    <Tag w="32" h="8" _hover={{ bgColor: "yellow", color: "black" }}>
                      {key}
                    </Tag>

                    <Tag w="32" h="8" _hover={{ bgColor: "yellow", color: "black" }}>
                      {key}
                    </Tag>
                  </Flex>
                </Fragment>
              );
            })}
          </Flex>
        ))}
      </Flex>
    </>
  );
};
