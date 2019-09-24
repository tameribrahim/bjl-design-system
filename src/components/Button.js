import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space, layout, size } from 'styled-system';
import theme from '../theme/index';
import Box from './Box'

const Button = styled.button.attrs(props => ({
  onClick: props.disabled ? undefined : props.onClick,
  className: props.disabled ? 'disabled' : ''
}))`
  ${space};
  ${color};
  ${layout};
  ${size};
`

Button.defaultProps = {
  theme
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