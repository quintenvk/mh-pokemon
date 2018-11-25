import styled from 'styled-components';
import { widthInputBorder, styleInputBorder, colorInputBorder } from '../../../tokens';

const Input = styled.input`
  display: block;
  width: 100%;
  border: ${widthInputBorder} ${styleInputBorder} ${colorInputBorder};
`;
export default Input;
