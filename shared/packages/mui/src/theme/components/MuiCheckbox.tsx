import {
  CheckboxChecked,
  CheckboxEmpty,
  CheckboxIndeterminate,
} from '@lead/shared/packages/icons';

import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiCheckbox'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    color: colors.text.disabled,
  },
};

const defaultProps: Component['defaultProps'] = {
  icon: <CheckboxEmpty />,
  indeterminateIcon: <CheckboxIndeterminate />,
  checkedIcon: <CheckboxChecked />,
};

export default {
  styleOverrides,
  defaultProps,
};
