import styled from 'styled-components';
import ListItem from '../../_shared/UI/ListItem';
import { widthMoveBorder, styleMoveBorder, colorMoveBorder, colorMoveText } from '../../../tokens';

const Move = styled(ListItem)`
  border: ${widthMoveBorder} ${styleMoveBorder} ${colorMoveBorder};
  border-radius: ${widthMoveBorder};
  color: ${colorMoveText};
`;

export default Move;
