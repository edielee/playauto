import styled from 'styled-components';

export default function Div(prop) {
  const Div = styled.div`
    background-color: ${prop.background_color};
    width: ${prop.width};
  `;

  return <Div>{prop.children}</Div>;
}
