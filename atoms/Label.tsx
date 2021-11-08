import styled from 'styled-components';

export default function Label(prop) {
  const Label = styled.label`
    color: ${prop.color};
  `;

  return <Label>{prop.children}</Label>;
}
