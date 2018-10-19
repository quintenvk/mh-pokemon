import styled from 'styled-components';
import {
  colorListItemActive,
  colorListItem,
  colorListItemActiveBackground,
  colorListItemBackground,
} from '../tokens';

/* eslint-disable no-confusing-arrow */
const ListItem = styled.li`
  list-style: none;
  background-color: ${props =>
    props.highlighted ? colorListItemActiveBackground : colorListItemBackground};
  color: ${props => (props.highlighted ? colorListItemActive : colorListItem)};
  padding: 2px 4px;
  font-size: ${props => (props.fontSize === 'small' ? '10px' : '12px')};
  :hover {
    cursor: ${props => (props.onClick ? 'pointer' : 'arrow')};
  }
`;
/* eslint-enable no-confusing-arrow */

export default ListItem;
