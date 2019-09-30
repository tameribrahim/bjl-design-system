export const getVariants = (theme) => {
  return ({
    buttons: {
      primary: {
        backgroundColor: theme.colors.primary[400],
        color: theme.colors.white,
        '&:hover': {
          backgroundColor: theme.colors.primary[600]
        }
      },
      'primary-outlined': {
        color: theme.colors.primary[400],
        borderColor: theme.colors.primary[400],
        '&:hover': {
          backgroundColor: theme.colors.primary[400],
          color: theme.colors.white
        }
      },
      disabled: {
        backgroundColor: theme.colors.grey[300],
        borderColor: theme.colors.grey[300],
        color: theme.colors.grey[500],
        cursor: 'not-allowed',
      },
      'disabled-outlined': {
        color: theme.colors.grey[500],
        borderColor: theme.colors.grey[500],
        cursor: 'not-allowed',
      },
    },
    buttonSizes: {
      normal: {
        height: theme.space[8],
        minWidth: '104px'
      },
      small: {
        height: theme.space[6]
      }
    }
  }
)}

export const useButtonStyle = theme => (`
  font-size:      ${theme.fontSizes.sm};
  padding:        ${theme.space[0]} ${theme.space[4]};
  border-radius:  ${theme.radii[1]};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacings[300]};
  transition:     0.2s;
`)