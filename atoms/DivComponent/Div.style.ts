import styled from 'styled-components';
import { IDiv } from './Div.interface';

export const DivStyle = styled.div<IDiv>`
  color: ${(props) => (!props.color ? 'blue' : props.color)};
  background-color: ${(props) => (!props.backgroundColor ? 'white' : props.backgroundColor)};
`;
