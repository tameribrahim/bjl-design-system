import styled from 'styled-components'
import { color, space, layout, flexbox } from 'styled-system';

const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  space,
  layout,
  color,
  flexbox,
)

export default Box;