import styled from 'styled-components';

import { IButton } from './ButtonInterface';
import Button from '@material-ui/core/Button';

export const ButtonTag = styled(Button)<IButton>`
  background: linear-gradient(45deg, #6bd7fe 30%, #0099ff 90%);
  border-radius: 10px;
  //box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3); //rgba(255, 105, 135, .3);
  color: ${({ theme }) => theme.color.text};
  height: height;
  padding: padding;
`;
