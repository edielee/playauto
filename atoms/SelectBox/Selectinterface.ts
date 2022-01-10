import React from 'react';
import { IAtoms } from '../index';

export interface ISelect 
   extends Pick<IAtoms, 'name' | 'defaultSize' | 'list' | 'block' | 'defaultValue'> {

}

export interface ISelectLabel
   extends Pick<ISelect, 'name' | 'defaultSize' | 'block' >{}


export interface IOption {
    value?:string;
}