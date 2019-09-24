const colors = {
  white: '#ffffff',
  grey: {
    100: '#fbfcfd',
    200: '#f4f4f8',
    300: '#e7e7ed',
    400: '#cdced9',
    500: '#a7a9bc',
    600: '#6b6c7e',
  },
  black: {
    400: '#2b2d39',
    600: '#000000',
  },
  blue: {
    200: '#abc6fb',
    400: '#3a8ffa',
    600: '#0c5bbe',
  },
  green: {
    200: '#b0e9d3',
    400: '#50d2a0',
    600: '#1b9365',
  },
  red: {
    200: '#ffbdbd',
    400: '#ff5f5f',
    600: '#ce0000',
  },
  orange: {
    200: '#ffdbb9',
    400: '#ffb46e',
    600: '#f08420',
  },
  yellow: {
    200: '#ffeec1',
    400: '#ffd76e',
    600: '#ffbe14',
  },
};

colors.primary = colors.orange;
colors.secondary = colors.grey[400];

export default colors;