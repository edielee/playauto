import styled from 'styled-components';

// 현재는 Footer에 들어갈 내용이 없어서 임시로 위치만 잡아둠.
const FooterStyle = styled.footer`
  height: 30px;
  width: 100%;
  bottom: 0px;
  position: absolute;
`;

export default function Footer() {
  return <FooterStyle></FooterStyle>;
}
