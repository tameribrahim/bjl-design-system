import {getThemeAttribute} from '../lib/lib';

export const getVariants = (theme) => {
  return ({
    buttons: {
      primary: {
        backgroundColor: theme.colors.primary[400],
        color: theme.colors.white,
      },
      'primary-outlined': {
        color: theme.colors.primary[400],
        borderColor: theme.colors.primary[400]
      },
      disabled: {
        backgroundColor: theme.colors.grey[400],
        color: theme.colors.grey[600]
      },
      'disabled-outlined': {
        color: theme.colors.grey[400],
        borderColor: theme.colors.grey[400]
      },
    },
    buttonSizes: {
      normal: {
        fontSize: theme.fontSizes.md,
        padding: `8px 16px`
      },
      small: {
        fontSize: theme.fontSizes.sm,
        padding: `8px 12px`
      }
    }
  }
)}

export const useButtonStyle = theme => (`
  padding: 6px 12px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: ${getThemeAttribute('letterSpacings.300')(theme)};
  &:hover {
    background-color: ${getThemeAttribute('colors.white')(theme)};
  }
`)