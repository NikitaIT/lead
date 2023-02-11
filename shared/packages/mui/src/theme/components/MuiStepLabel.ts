import StepLabelComponent from '../../components/StepLabelComponent';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiStepLabel'>;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    flexDirection: 'column',
  },
  iconContainer: {
    margin: 0,
    paddingRight: 0,
  },
  labelContainer: {
    '& > .MuiStepLabel-label': {
      marginTop: 10,
      textAlign: 'center',
    },
    '& > .MuiStepLabel-label:empty': {
      marginTop: 0,
    },
  },
  label: {
    fontWeight: 'normal',
  },
};

const defaultProps: Component['defaultProps'] = {
  StepIconComponent: StepLabelComponent,
};

export default { styleOverrides, defaultProps };
