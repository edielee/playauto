import styled from 'styled-components';
import { IDiv } from './Div.interface';

export const DivStyle = styled.div<IDiv>`
  position: ${(props) => (!props.position ? 'static' : props.position)};
  min-height: ${(props) => (!props.minHeight ? 'none' : props.minHeight)};
`;
