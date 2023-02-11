import {
  ArrowLeftThin,
  ArrowRightThin,
  ArrowDown,
} from '@lead/shared/packages/icons';

import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiCalendarPicker'>;

const defaultProps: Component['defaultProps'] = {
  components: {
    LeftArrowIcon: ArrowLeftThin,
    RightArrowIcon: ArrowRightThin,
    SwitchViewIcon: ArrowDown,
  },
};

export default {
  defaultProps,
};
