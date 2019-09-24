import colors from './colors'
import typography from './typography'

const breakpoints = ['544px', '768px', '1012px', '1280px'];

// aliases
// breakpoints.sm = breakpoints[0]
// breakpoints.md = breakpoints[1]
// breakpoints.lg = breakpoints[2]
// breakpoints.xl = breakpoints[3]

export default {
  breakpoints,
  space: [0, 4, 8, 12, 16, 24, 32, 40, 48],
  borders: [0, '1px solid'],
  colors,
  ...typography
}