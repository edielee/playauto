//import { IAtoms } from '../index';
import { IAtoms } from '../common/atomsInterface';


export interface IButton extends Pick<IAtoms, 'defaultSize' | 'children' >{
   /*
   * default : contained
   */
  variant?: 'contained' | 'outlined';
}

export interface IButtonLabel extends Pick<IButton, 'variant' > {}