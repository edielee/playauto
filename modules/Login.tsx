import Div from '../atoms/Div';
import Label from '../atoms/Label';
import Text from '../atoms/Text';
import Textarea from '../atoms/Textarea';

export default function Login() {
  return (
    <Div background_color='#2c55d1' width='550px'>
      <Text>ddd</Text>
      <Label color='white'>ID</Label>
      <br />
      <Textarea placeholder='아이디를 입력해주세요.' resize='none'></Textarea>
      <br />
      <Label color='white'>PW</Label>
      <br />
      <Textarea placeholder='비밀번호를 입력해주세요.' resize='none'></Textarea>
    </Div>
  );
}
