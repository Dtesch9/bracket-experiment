import { Flex, FlexProps, Tag } from '@chakra-ui/react';
import { Fragment, useMemo } from 'react';
import { DTeschLinePath } from '../dtesch-line-path';
import { TEAM_COUNT, generateRounds, lineCoords, generateMatchesFromRoundIndex, aggByRound } from './brackets.utils';
import type { Bracket } from './brackets.utils';

const ROW_GAP = 16;
const LINES_COORDS = lineCoords();

type ChildrenAsFunctionProps = {
  id: string;
  matchData: Bracket | null;
  width: FlexProps['w'];
};

type BracketsProps = {
  data: Array<Bracket>;
  bracketWidth: FlexProps['w'];
  children: React.ReactNode | ((props: ChildrenAsFunctionProps) => React.ReactNode);
};

export const Brackets = ({ data, children, bracketWidth }: BracketsProps) => {
  const bracketsData = useMemo(() => aggByRound(data), [data]);

  const rounds = useMemo(() => generateRounds(TEAM_COUNT), []);

  return (
    <Flex direction="column">
      {/* Rows (Header) */}
      <Flex gap={ROW_GAP}>
        {rounds.map((round) => (
          <Tag key={round} w={bracketWidth} bgColor="purple.900">
            Round {round}
          </Tag>
        ))}
      </Flex>

      {/* Painting all possible brackets */}
      <Flex gap={ROW_GAP} mt="4">
        {/* Rows (rounds) */}
        {rounds.map((round, roundIndex) => (
          <Flex key={round} direction="column" gap="16" justify="space-around" zIndex="1">
            {typeof children !== 'function' && children}

            {typeof children === 'function' && (
              <>
                {/* Columns (Matches) */}
                {generateMatchesFromRoundIndex(TEAM_COUNT, roundIndex).map((match) => {
                  const id = `${round}-${match}`;
                  const lineCoord = LINES_COORDS[id];

                  const matchData: Bracket | null = bracketsData[round]?.[match - 1] ?? null;

                  return (
                    <Fragment key={`${id}-${TEAM_COUNT}`}>
                      {lineCoord && (
                        <DTeschLinePath
                          startPointId={lineCoord.start}
                          endPointId={lineCoord.end}
                          color="rgba(65, 65, 66, 1)"
                        />
                      )}

                      {typeof children === 'function' && children({ id, matchData, width: bracketWidth })}
                    </Fragment>
                  );
                })}
              </>
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
