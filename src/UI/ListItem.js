import styled from 'styled-components';
import {
  colorListItemActive,
  colorListItem,
  colorListItemActiveBackground,
  colorListItemBackground,
} from '../tokens';

/* eslint-disable no-confusing-arrow */
const ListItem = styled.li`
  list-item-style: none;
  background-color: ${props =>
    props.highlighted ? colorListItemActiveBackground : colorListItemBackground};
  color: ${props => (props.highlighted ? colorListItemActive : colorListItem)};
  padding: 2px 4px;
`;
/* eslint-enable no-confusing-arrow */

export default ListItem;
