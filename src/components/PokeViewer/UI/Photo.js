import styled from 'styled-components';
import { widthPhotoBorder, stylePhotoBorder, colorPhotoBorder } from '../../../tokens';

const Photo = styled.img`
  border: ${widthPhotoBorder} ${stylePhotoBorder} ${colorPhotoBorder};
`;

export default Photo;
