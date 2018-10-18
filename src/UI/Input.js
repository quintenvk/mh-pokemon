import styled from 'styled-components';
import { widthInputBorder, styleInputBorder, colorInputBorder } from '../tokens';

const Input = styled.input`
  display: block;
  border: ${widthInputBorder} ${styleInputBorder} ${colorInputBorder};
`;
export default Input;
