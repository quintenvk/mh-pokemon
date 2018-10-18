import styled from 'styled-components';
import List from './List';

const DownshiftResults = styled(List)`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 220px;
`;
export default DownshiftResults;
