import {
  RadioButtonChecked,
  RadioButtonEmpty,
} from '@lead/shared/packages/icons';

import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiRadio'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    color: colors.text.disabled,
  },
};

const defaultProps: Component['defaultProps'] = {
  icon: <RadioButtonEmpty />,
  checkedIcon: <RadioButtonChecked />,
};

export default { styleOverrides, defaultProps };
