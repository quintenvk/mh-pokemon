import styled from 'styled-components';
import { widthPhotoBorder, stylePhotoBorder, colorPhotoBorder } from '../../../tokens';

const Photo = styled.img`
  border: ${props =>
    props.border ? `${widthPhotoBorder} ${stylePhotoBorder} ${colorPhotoBorder}` : '0 transparent'};
`;

export default Photo;
