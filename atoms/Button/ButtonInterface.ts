import { IAtoms } from '../index';


export interface IButton extends Pick<IAtoms, 'defaultSize' | 'children' >{
   /*
   * default : contained
   */
  variant?: 'contained' | 'outlined';
}

export interface IButtonLabel extends Pick<IButton, 'variant' > {}