import styled from 'styled-components';
import ColumnGrid from '../../_shared/UI/ColumnGrid';

const MoveGrid = styled(ColumnGrid)`
  min-height: 0;
  grid-auto-rows: min-content;
  grid-row-gap: 4px;
`;

export default MoveGrid;
