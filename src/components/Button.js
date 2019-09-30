import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant, compose, space, color, display, layout, buttonStyle } from 'styled-system';
import theme from '../theme/index';
import {useButtonStyle} from '../theme/buttons'

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes'
})

const styleProps = compose(
  space,
  color,
  display
);

const Button = styled('button').attrs(props => ({
  onClick: props.disabled ? undefined : props.onClick,
  className: props.disabled ? 'disabled' : ''
}))`
  ${useButtonStyle(theme)};
  ${buttonStyle};
  ${buttonSize};
  ${layout};
  ${styleProps};
`

Button.defaultProps = {
  theme,
  variant: 'primary',
//   size:    'normal'
}

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.oneOf(['button', 'a', 'summary', 'input']), PropTypes.func]),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'large']),
  theme: PropTypes.object,
}

export default Button