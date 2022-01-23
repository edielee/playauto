//import React from 'react';
import { IAtoms } from '../common/atomsInterface';

export interface IDiv {
  /**
   * 자식 Type
   */
  children?: React.ReactNode;
  /**
   * 최소 높이
   */
  minHeight?: string;
  /**
   * 요소 배치 방법
   */
  position?: string;
}
