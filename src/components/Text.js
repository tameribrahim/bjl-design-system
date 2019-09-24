import styled from 'styled-components'
import PropTypes from 'prop-types'
import { variant, color, space } from 'styled-system'
import theme from '../theme/index'

const variants = {
  variants: {
    display1: {
      fontWeight: 400,
      fontSize: '6xl',
      fontFamily: 'font2',
      lineHeight: '900',
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
      fontFamily: 'font2',
      lineHeight: 400,
      margin: 0,
      marginBottom: [4]
    },
    body2: {
      fontWeight: 400,
      fontSize: 'md',
      fontFamily: 'font1',
      lineHeight: 400,
      letterSpacing: 200,
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
const Text = styled.p`
  ${variant(variants)}
  ${color}
  ${space}
`

Text.defaultProps = {
  theme
}

Text.propTypes = {
  theme: PropTypes.object
}

export default Text