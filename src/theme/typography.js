const typography = {
  letterSpacings: {
    100: "0",
    200: "0.02em",
    300: "0.06em",
    400: "0.07em",
    500: "0.1em",
  },
  lineHeights: {
    100: '16px',
    200: '20px',
    300: '24px',
    400: '28px',
    500: '36px',
    600: '44px',
    700: '56px',
    800: '84px',
    900: '100px',
  },
  fontWeights: {
    400: '400',
    500: '500',
    700: '700',
  },
  fonts: {
    font1: fontStack([
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
    font2: fontStack(['Source Serif Pro', 'serif'])
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

export default typography;