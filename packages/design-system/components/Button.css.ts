import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
  base: style({
    padding: '10px 20px',
    display: 'block',
    backgroundColor: '#007BFF',
    color: 'white',
    marginTop: '20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '30px',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#0056b3',
    },
    ':active': {
      backgroundColor: '#003680',
    },
    ':focus': {
      outline: 'none',
    },
  }),
  variants: {
    variant: {
      secondary: style({
        backgroundColor: 'palegoldenrod',
        ':hover': {
          backgroundColor: 'gold',
        },
        ':active': {
          backgroundColor: 'goldenrod',
        },
      }),
      tertiary: style({
        backgroundColor: 'blueviolet',
        ':hover': {
          backgroundColor: 'lightgreen',
        },
        ':active': {
          backgroundColor: 'goldenrod',
        },
      }),
    },
  },
});