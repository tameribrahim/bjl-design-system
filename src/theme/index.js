import colors from './colors'
import typography from './typography';
import {getVariants} from './buttons'

const breakpoints = ['544px', '768px', '1012px', '1280px'];

const theme = {
  breakpoints,
  space: [0, 4, 8, 12, 16, 24, 32, 40, 48],
  borders: [0, '1px solid'],
  colors,
  ...typography,
  radii: [0, 2, 4, 8]
};
const buttonVariants = getVariants(theme)

export default {
  ...theme,
  ...buttonVariants
}