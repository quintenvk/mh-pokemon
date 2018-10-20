import styled from 'styled-components';

const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
  column-gap: ${props => (props.gutter ? props.gutter : '1%')};
`;

export default ColumnGrid;
