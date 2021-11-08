import styled from 'styled-components';

export default function Text(prop) {
  const Text = styled.text``;

  return <Text>{prop.children}</Text>;
}
