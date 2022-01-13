import Link from 'next/Link';
import { ILi } from './Ll.interface';
import { LiStyle } from './Ll.style';

export default function Li(props: ILi) {
  // 넘어온 자식요소가 Map인 경우 (li 태그에 a 태그를 포함하여 리턴)
  if (props.children instanceof Map) {
    let liContentList = new Array();
    props.children.forEach((href, content) =>
      liContentList.push(
        <>
          <Link href={href}>
            <a>{content}</a>
          </Link>
        </>,
      ),
    );

    return (
      <>
        {liContentList.map((content) => (
          <LiStyle {...props}>{content}</LiStyle>
        ))}
      </>
    );
  }
  // 넘어온 자식요소가 배열인 경우 (li 태그의 content만 다중으로 리턴)
  else if (Array.isArray(props.children)) {
    return (
      <>
        {props.children.map((content) => (
          <LiStyle {...props}>{content}</LiStyle>
        ))}
      </>
    );
  }
  // 넘어온 자식요소가 string인 경우 (li 태그의 content를 단일로 리턴)
  else if (typeof props.children == 'string') {
    return <LiStyle {...props}>{props.children}</LiStyle>;
  }
}
