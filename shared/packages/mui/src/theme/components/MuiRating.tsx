import { FavouriteFilled } from '@lead/shared/packages/icons';

import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiRating'>;

const styleOverrides: Component['styleOverrides'] = {
  iconFilled: {
    color: colors.secondary.light,
  },
  iconEmpty: {
    color: colors.oriGrey[200],
  },
};

const defaultProps: Component['defaultProps'] = {
  icon: <FavouriteFilled fontSize="inherit" />,
  emptyIcon: <FavouriteFilled fontSize="inherit" />,
};

export default { styleOverrides, defaultProps };
