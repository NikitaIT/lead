import Backdrop from '@mui/material/Backdrop';

import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiModal'>;
const defaultProps: Component['defaultProps'] = {
  BackdropComponent: Backdrop,
};

export default { defaultProps };
