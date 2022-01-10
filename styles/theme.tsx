import { DefaultTheme } from 'styled-components';

export const LightTheme: DefaultTheme = {
  defaultSize: {
    small: '172px',
    medium: '496px',
    large: '896px',
    full: '100%',
  },
  defaultHeight: {
    medium: '36px',
  },
  device: {
    maxWidth: '1400px',
    minWidth: '768px',
    tablet: 'screen and (max-width: 1024px)',
    desktop: 'screen and (min-width: 1024px)',
  },

  color: {
    background: '#FAFAFA',
    containerBackground: '#f2F6fc',
    backgroundBox: '#F5F5F5',
    backgroundTableHeader: '#f2f6fc',
    accent: '#0072CE',
    text: '#333333', // '#333333',
    labelText: '#63A2AD',
    disable: '#F4FAFF',
  },

  // bgColor: '#FAFAFA',
  // titleBgColor: '#F5F5F5',
  // containerBgColor: '#FFFFFF',
  // textColor: '#333333',
  // labelTextColor: '#63A2AD',

  // #f2f6fc
  //#F4FAFF
};