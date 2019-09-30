import colors from './colors'
import typography from './typography';
import {getVariants} from './buttons'

const breakpoints = ['544px', '768px', '1012px', '1280px'];

const theme = {
  breakpoints,
  space: ['0px', '4px', '8px', '12px', '16px', '24px', '32px', '40px', '48px', '64px', '96px', '160px'],
  borders: [0, '1px solid'],
  colors,
  ...typography,
  radii: ['0px', '3px', '4px', '8px']
};
const buttonVariants = getVariants(theme)

export default {
  ...theme,
  ...buttonVariants
}