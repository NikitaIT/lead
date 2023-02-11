/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { alpha } from '@mui/system';
import {
  CheckCircle,
  Clock,
  ErrorCircle,
  Settings,
} from '@lead/shared/packages/icons';

import { colors } from '../constants';
import { SHADOW_LEVEL1 } from '../shadows';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiAlert'>;

const styleOverrides: Component['styleOverrides'] = {
  root: ({ ownerState }) => ({
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: '1fr auto 1fr',
    opacity: 0.85,
    '& a': {
      fontWeight: 'bold',
    },
    '& a:hover': {
      color: colors.oriGrey[300],
    },
    ...(ownerState?.color === 'default' &&
      ownerState?.variant === 'filled' && {
        backgroundColor: colors.commonColors.white,
        color: colors.text.primary,
        boxShadow: SHADOW_LEVEL1,
      }),
  }),
  standard: {
    display: 'block',
    opacity: 1,
    position: 'relative',
    padding: 0,
    fontWeight: 'normal',
    '& .MuiAlert-action': {
      position: 'absolute',
      top: '2px',
      right: '2px',
      padding: 0,
      margin: 0,
    },
  },
  standardInfo: {
    backgroundColor: alpha(colors.defaultColors.light, 0.1),
    color: colors.defaultColors.main,
    borderColor: colors.defaultColors.main,
  },
  standardError: {
    backgroundColor: alpha(colors.error.main, 0.1),
    color: colors.error.dark,
    borderColor: colors.error.dark,
  },
  standardSuccess: {
    backgroundColor: alpha(colors.success.main, 0.1),
    color: colors.success.dark,
    borderColor: colors.success.dark,
  },
  standardWarning: {
    backgroundColor: alpha(colors.warning.main, 0.1),
    color: colors.warning.dark,
    borderColor: colors.warning.dark,
  },
  icon: ({ ownerState }) => ({
    justifySelf: 'end',
    marginTop: -3,
    marginBottom: -3,
    '& .MuiSvgIcon-root': {
      fontSize: 28,
    },
    ...(ownerState?.variant === 'standard' && {
      display: 'none',
    }),
  }),
  message: ({ ownerState }) => ({
    justifySelf: 'center',
    ...(ownerState?.variant === 'standard' && {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
    }),
  }),
  action: ({ ownerState }) => ({
    marginLeft: 0,
    justifySelf: 'end',
  }),
};

const defaultProps: Component['defaultProps'] = {
  variant: 'filled',
  iconMapping: {
    error: <ErrorCircle />,
    info: <Settings />,
    success: <CheckCircle />,
    warning: <Clock />,
  },
};

export default {
  defaultProps,
  styleOverrides,
};
