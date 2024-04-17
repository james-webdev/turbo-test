import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    background: 'lightblue',
    fontSize: '45px',
    headerBackground: 'red',
    headerText: 'white',
    accent: 'yellow',
  },
});