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
    xs:    '9px',
    sm:    '12px',
    md:    '16px',
    lg:    '20px',
    xl:    '21px',
    "2xl": '28px',
    "3xl": '38px',
    "4xl": '50px',
    "5xl": '68px',
    "6xl": '90px',
  },
};

function fontStack(fonts) {
  return fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ')
}

export default typography;

export const variants = {
  variants: {
    display1: {
      fontWeight: 400,
      fontSize: '6xl',
      fontFamily: 'font2',
      lineHeight: '800',
      margin: 0,
      marginBottom: [8],
    },
    display2: {
      fontWeight: 400,
      fontSize: '5xl',
      fontFamily: 'font2',
      lineHeight: 800,
      margin: 0,
      marginBottom: [7]
    },
    heading1: {
      fontWeight: 500,
      fontSize: '4xl',
      fontFamily: 'font1',
      lineHeight: 700,
      margin: 0,
      marginBottom: [7]
    },
    heading2: {
      fontWeight: 500,
      fontSize: '3xl',
      fontFamily: 'font1',
      lineHeight: 600,
      margin: 0,
      marginBottom: [6]
    },
    heading3: {
      fontWeight: 500,
      fontSize: '2xl',
      fontFamily: 'font1',
      lineHeight: 500,
      margin: 0,
      marginBottom: [5]
    },
    heading4: {
      fontWeight: 500,
      fontSize: 'xl',
      fontFamily: 'font1',
      lineHeight: 300,
      margin: 0,
      marginBottom: [4]
    },
    heading5: {
      fontWeight: 700,
      fontSize: 'md',
      fontFamily: 'font1',
      lineHeight: 200,
      letterSpacing: 200,
      margin: 0,
      marginBottom: [4]
    },
    body1: {
      fontWeight: 400,
      fontSize: 'lg',
      fontFamily: 'font1',
      lineHeight: 400,
      margin: 0,
      marginBottom: [4]
    },
    body2: {
      fontWeight: 400,
      fontSize: 'md',
      fontFamily: 'font1',
      lineHeight: '400',
      letterSpacing: '200',
      margin: 0,
      marginBottom: [4]
    },
    caption1: {
      fontWeight: 400,
      fontSize: 'sm',
      fontFamily: 'font1',
      lineHeight: 400,
      letterSpacing: 400,
      margin: 0,
      marginBottom: [3]
    },
    caption2: {
      fontWeight: 400,
      fontSize: 'xs',
      fontFamily: 'font1',
      lineHeight: 400,
      letterSpacing: 500,
      textTransform: 'uppercase',
      margin: 0,
      marginBottom: [2]
    },
    'button-text': {
      fontWeight: 400,
      fontSize: 'sm',
      fontFamily: 'font1',
      lineHeight: 400,
      letterSpacing: 300,
      textTransform: 'uppercase',
      margin: 0,
    },
  }
};