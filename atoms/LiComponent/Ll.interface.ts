import React from 'react';

export interface ILi {
  children: React.ReactNode | Map<string, string> | Array<string> | string;

  display?: string;
}
