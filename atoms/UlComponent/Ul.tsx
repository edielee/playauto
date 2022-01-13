import { IUl } from './Ul.interface';
import { UlStyle } from './Ul.style';

export default function Ul(props: IUl) {
  return <UlStyle {...props}>{props.children}</UlStyle>;
}
