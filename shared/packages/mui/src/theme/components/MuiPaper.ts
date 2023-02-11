import { colors } from '../constants';
import shape from '../shape';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiPaper'>;

const styleOverrides: Component['styleOverrides'] = {
  rounded: {
    borderRadius: shape.borderRadius,
  },
  outlined: {
    border: `1px solid ${colors.oriGrey[200]}`,
  },
};
export default { styleOverrides };
