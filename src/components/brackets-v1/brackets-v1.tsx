import { Flex, Tag } from '@chakra-ui/react';
import { Fragment } from 'react';
import { DTeschLinePath } from '../dtesch-line-path';
import {
  TEAM_COUNT,
  generateRounds,
  lineCoords,
  generateMatchesFromRoundIndex,
  aggByRound,
} from '../../utils/brackets';
import data from '../../../bracket-data.json';

const ROW_GAP = 16;

export const BracketsDouglasLines = () => {
  const bracketsData = aggByRound(data);

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
            {generateMatchesFromRoundIndex(TEAM_COUNT, index).map((match) => {
              const id = `${round}-${match}`;
              const coords = lineCoords();
              const lineCoord = coords[id];

              const matchData = bracketsData[round]?.[match - 1] ?? null;

              return (
                <Fragment key={`${id}-${TEAM_COUNT}`}>
                  {lineCoord && (
                    <DTeschLinePath
                      startPointId={lineCoord.start}
                      endPointId={lineCoord.end}
                      color="rgba(65, 65, 66, 1)"
                    />
                  )}

                  <Flex id={id} key={id} direction="column">
                    <Tag w="32" h="8" _hover={{ bgColor: 'yellow', color: 'black' }}>
                      {id} - {matchData?.topTeam.name}
                    </Tag>

                    <Tag w="32" h="8" _hover={{ bgColor: 'yellow', color: 'black' }}>
                      {id} - {matchData?.bottomTeam.name}
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
