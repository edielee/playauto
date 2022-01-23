import styled from 'styled-components';
import { ILi } from './Ll.interface';

export const LiStyle = styled.li<ILi>`
  display: ${(props) => (!props.display ? 'block' : props.display)};
`;
