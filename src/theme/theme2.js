const colors = {
  white: '#ffffff',
  grey: {
    100: '#fbfcfd',
    200: '#f4f4f8',
    300: '#e7e7ed',
    400: '#cdced9',
    500: '#a7a9bc',
    600: '#6b6c7e',
  },
  black: {
    400: '#2b2d39',
    600: '#000000',
  },
  blue: {
    200: '#abc6fb',
    400: '#3a8ffa',
    600: '#0c5bbe',
  },
  green: {
    200: '#b0e9d3',
    400: '#50d2a0',
    600: '#1b9365',
  },
  red: {
    200: '#ffbdbd',
    400: '#ff5f5f',
    600: '#ce0000',
  },
  orange: {
    200: '#ffdbb9',
    400: '#ffb46e',
    600: '#f08420',
  },
  yellow: {
    200: '#ffeec1',
    400: '#ffd76e',
    600: '#ffbe14',
  },
};

const typography = {
  letterSpacings: {
    100: "0",
    200: "0.02em",
    300: "0.06em",
    400: "0.07em",
    500: "0.1em",
  },
  lineHeights: {
    normal: "normal",
    100: "1",
    200: "1.25",
    300: "1.375",
    400: "1.5",
    500: "1.625",
    600: "2",
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    bold: '700',
  },
  fonts: {
    normal: fontStack([
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol'
    ]),
    display: fontStack(['Source Serif Pro', 'serif'])
  },
  fontSizes: {
    xs: "0.562em",
    sm: "0.75em",
    md: "1em",
    lg: "1.25em",
    xl: "1.33em",
    "2xl": "1.78em",
    "3xl": "2.375em",
    "4xl": "3.18em",
    "5xl": "4.2em",
    "6xl": "5.61em",
  },
};

function fontStack(fonts) {
  return fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ')
}

const breakpoints = ['544px', '768px', '1012px', '1280px'];

// aliases
// breakpoints.sm = breakpoints[0]
// breakpoints.md = breakpoints[1]
// breakpoints.lg = breakpoints[2]
// breakpoints.xl = breakpoints[3]

export default {
  breakpoints,
  space: [0, 4, 8, 12, 16, 24, 32, 40, 48],
  borders: [0, '1px solid'],
  colors,
  ...typography
}