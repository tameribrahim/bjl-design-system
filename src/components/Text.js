import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../theme/index'
import { compose, variant, color, space, layout, typography, textStyle } from 'styled-system'
import {variants} from '../theme/typography'

const styleProps = compose(
    textStyle,
    typography,
);

const Text = styled.p`
  ${color}
  ${space}
  ${styleProps}
  ${variant(variants)}
`

Text.defaultProps = {
  theme
}

Text.propTypes = {
  theme: PropTypes.object,
  variant: PropTypes.oneOf([
    'display1', 'display2',
    'heading1', 'heading2', 'heading3', 'heading4', 'heading5',
    'body1', 'body2',
    'caption1', 'caption2',
    'button-text'
  ])
}

export default Text