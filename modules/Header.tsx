import Li from '../atoms/LiComponent/Ll';
import Ul from '../atoms/UlComponent/Ul';
import menu from '../public/menu';

export default function Header() {
  let menuList = new Array();
  menu.forEach((detailMenu, mainMenu) =>
    menuList.push(
      <>
        <Li display='inline-block'>
          <Ul>
            {mainMenu}
            <Li display='none'>{detailMenu}</Li>
          </Ul>
        </Li>
      </>,
    ),
  );

  return <Ul>{menuList}</Ul>;
}
