import Li from '../atoms/LiComponent/Ll';
import Ul from '../atoms/UlComponent/Ul';

//let testData = new Map([
//   ['이게 content고', '이건 주소'],
//   ['이게 content고2', '이건 주소2'],
//   ['이게 content고3', '이건 주소3'],
// ]);

//let testData2 = new Array('123', '456', '789');

//let testData3 = '깔깔깔 이것은 리스트라구요';

export default function Header() {
  return (
    <Ul>
      <Li>여기가 헤더자리예요</Li>
    </Ul>
  );
}
