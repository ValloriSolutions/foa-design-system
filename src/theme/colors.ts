import { hexToRgba } from '../utils/colors';

export const red = '#F04343';
export const green = '#64AA0B';
export const yellow = '#F0CA43';
export const graffiti = '#333333';
export const white = '#ffffff';

export const palette = {
  colors: {
    red,
    green,
    yellow,
    graffiti,
    white
  },
  text: {
    primary: graffiti,
    secondary: '#757575',
    disabled: '#bdbdbd',
    white
  },
  background: {
    default: '#FBFBFB',
    paper: '#fff',
    green: hexToRgba(green, 0.1),
    yellow: hexToRgba(yellow, 0.1),
  }, 
  border: {
    default: '#DDDDDD',
    disabled: white,
  }
};

export const buttons = {
    primary: {
      background: palette.colors.red,
      color: palette.text.white,
      border: '1px solid ' + palette.colors.red,
    },
    secondary: {
      background: palette.background.default,
      color: palette.text.secondary,
      border: '1px solid ' + palette.border.default,
    },
    disabled: {
      background: palette.background.paper,
      color: palette.text.disabled,
      border: '1px solid ' + palette.border.disabled,
    }
}

export default {
  red,
  green,
  yellow,
  graffiti,
  ...palette,
  buttons
};
