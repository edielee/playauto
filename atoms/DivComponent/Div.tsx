import { IDiv } from './Div.interface';
import { DivStyle } from './Div.style';

export default function Div(props: IDiv) {
  return <DivStyle>{props.content}</DivStyle>;
}
