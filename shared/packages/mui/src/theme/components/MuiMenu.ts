import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiMenu'>;

const styleOverrides: Component['styleOverrides'] = {
  paper: {
    '&.OriSelectPaper': {
      border: `1px solid ${colors.oriGrey[300]}`,
      borderRadius: 5,
      marginTop: '5px',
    },
  },
};
export default { styleOverrides };
