import styled from 'styled-components';

export default function Ul(prop) {
  const Ul = styled.ul`
    list-style: ${prop.list_style};
  `;

  return <Ul>{prop.children}</Ul>;
}
