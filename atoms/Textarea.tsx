import styled from 'styled-components';

export default function Textarea(prop) {
  const Textarea = styled.textarea`
    resize: ${prop.resize};
    width: 500px;
  `;

  return <Textarea placeholder={prop.placeholder}>{prop.children}</Textarea>;
}
