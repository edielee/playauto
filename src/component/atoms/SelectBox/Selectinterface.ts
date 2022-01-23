import React from 'react';
//import { IAtoms } from '../index';
import { IAtoms } from '../common/atomsInterface';

export interface ISelect 
   extends Pick<IAtoms, 'name' | 'defaultSize' | 'list' | 'block' | 'defaultValue'> {

}

export interface ISelectLabel
   extends Pick<ISelect, 'name' | 'defaultSize' | 'block' >{}


export interface IOption {
    value?:string;
}