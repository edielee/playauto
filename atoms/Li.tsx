import styled from 'styled-components';

export default function Li(prop) {
  const Li = styled.li`
    float: ${prop.float};
  `;
  return <Li>{prop.name}</Li>;
}
