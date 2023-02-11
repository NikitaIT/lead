import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiTypography'>;

const defaultProps: Component['defaultProps'] = {
  variantMapping: {
    h3: 'div',
    h4: 'div',
    h5: 'div',
    h6: 'div',
  },
};

export default { defaultProps };
