import { autocompleteClasses } from '@mui/material/Autocomplete';
import { filledInputClasses } from '@mui/material/FilledInput';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { alpha } from '@mui/system';
import { ArrowDownThin, Clear } from '@lead/shared/packages/icons';

import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiAutocomplete'>;

const styleOverrides: Component['styleOverrides'] = {
  inputRoot: {
    [`&[class*="${filledInputClasses.root}"]`]: {
      paddingTop: 0,
      paddingLeft: 10,
      '& input': {
        padding: '12.5px 0',
      },
    },
    '&.Mui-focused': {
      [`.${outlinedInputClasses.notchedOutline}`]: {
        borderColor: colors.oriGrey[300],
      },
    },
    [`& .${autocompleteClasses.input}`]: {
      padding: '3.5px 6px',
    },
  },
  paper: {
    border: `1px solid ${colors.oriGrey[300]}`,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    boxShadow: 'none',
    transition: 'none',
  },
  option: {
    [`&.${autocompleteClasses.option}.${autocompleteClasses.focused}`]: {
      backgroundColor: 'unset',
    },
    [`&.${autocompleteClasses.option}.Mui-focusVisible`]: {
      backgroundColor: alpha(colors.primary.main, 0.08),
    },
    [`&.${autocompleteClasses.option}.${autocompleteClasses.focused}:hover`]: {
      backgroundColor: alpha(colors.primary.main, 0.08),
    },
    [`&.${autocompleteClasses.option}[aria-selected="true"]`]: {
      backgroundColor: alpha(colors.primary.main, 0.15),
    },
    [`&.${autocompleteClasses.option}[aria-selected="true"].${autocompleteClasses.focused}`]:
      {
        backgroundColor: alpha(colors.primary.main, 0.15),
      },
    [`&.${autocompleteClasses.option}[aria-selected="true"]:hover`]: {
      backgroundColor: alpha(colors.primary.main, 0.2),
    },
  },
};

const defaultProps: Component['defaultProps'] = {
  clearIcon: <Clear fontSize="small" />,
  popupIcon: <ArrowDownThin fontSize="medium" />,
};

export default {
  defaultProps,
  styleOverrides,
};
