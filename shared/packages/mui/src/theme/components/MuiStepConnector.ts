import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiStepConnector'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    marginTop: 17,
    '&.Mui-active,&.Mui-completed': {
      '& .MuiStepConnector-line': {
        backgroundColor: colors.secondary.dark,
      },
    },
  },
  alternativeLabel: {
    left: 'calc(-50% + 35px)',
    right: 'calc(50% + 35px)',
    border: 0,
    top: 0,
  },
  line: {
    height: 5,
    borderRadius: 5,
    backgroundColor: colors.oriGrey['200'],
  },
  lineHorizontal: {
    borderTopStyle: 'none',
  },
};
export default { styleOverrides };
