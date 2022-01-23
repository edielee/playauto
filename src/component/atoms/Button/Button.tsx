import React from 'react';

import { IButton } from './ButtonInterface';
import { ButtonTag } from './Button.style';

function ButtonComponent(props: IButton) {
  return <ButtonTag>{props.children}</ButtonTag>;
}

export default React.memo(ButtonComponent);
