import styled from 'styled-components';
import {
  colorStatsTableHeaderText,
  colorStatsTableText,
  colorStatsTableHeaderBackground,
  colorStatsTableBackground,
} from '../../../tokens';

const PokeStatsCol = styled.td`
  color: ${props => (props.header ? colorStatsTableHeaderText : colorStatsTableText)};
  background-color: ${props =>
    props.header ? colorStatsTableHeaderBackground : colorStatsTableBackground};
  padding: 2px 4px;
  text-transform: uppercase;
  font-weight: bold;
`;

export default PokeStatsCol;
