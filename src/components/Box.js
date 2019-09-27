import styled from 'styled-components'
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
} from 'styled-system';

export const systemProps = compose(
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox,
);

const Box = styled('div')({
  boxSizing: 'border-box'
}, systemProps)

export default Box;