import themeGet from '@styled-system/theme-get'
import {get as getKey} from 'styled-system'
import theme from '../theme'

export const getThemeAttribute = (key) => themeGet(key, getKey(theme, key))
