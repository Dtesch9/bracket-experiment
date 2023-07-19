import data from '../../bracket-data.json';
import { Brackets, BracketsMatch, BracketsTeam } from './brackets';

export const BracketsDouglasLines = () => {
  return (
    <Brackets data={data} bracketWidth="32">
      {({ id, matchData, width }) => (
        <BracketsMatch id={id} key={id} w={width}>
          <BracketsTeam>
            {id} - {matchData?.topTeam.name}
          </BracketsTeam>

          <BracketsTeam>
            {id} - {matchData?.bottomTeam.name}
          </BracketsTeam>
        </BracketsMatch>
      )}
    </Brackets>
  );
};
