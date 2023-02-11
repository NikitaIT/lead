import { IconButton, Alert as MuiAlert } from '@mui/material';
import type { AlertProps } from '@mui/material/Alert';
import { Clear } from '@lead/shared/packages/icons';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<
  AlertProps & { enableAction?: boolean },
  ElementType
>('alert')(({ enableAction, ...props }) => {
  let action;
  if (enableAction) {
    action = (
      <IconButton color="inherit" size="small">
        <Clear />
      </IconButton>
    );
  }

  return <MuiAlert {...props} action={action} />;
});

export const Alert = Template.bind({});

Alert.argTypes = {
  children: {
    control: {
      type: 'text',
    },
  },
  variant: {
    control: {
      type: 'select',
    },
    options: ['filled', 'outlined', 'standard'],
  },
  severity: {
    control: {
      type: 'select',
    },
    options: ['error', 'info', 'success', 'warning'],
  },
  enableAction: {
    type: 'boolean',
  },
  color: {
    control: {
      type: 'select',
    },
    options: ['default', 'error', 'info', 'success', 'warning'],
  },
};

Alert.args = {
  children: 'Use severity rather than color',
};

Alert.parameters = {
  storySource: {
    source:
      'withMaterialLink<AlertProps & { enableAction?: boolean }, ElementType>(\'alert\')(\n  ({ enableAction, ...props }) => {\n    let action;\n    if (enableAction) {\n      action = (\n        <IconButton\n          color="inherit"\n          size="small"\n        >\n          <Clear />\n        </IconButton>\n      );\n    }\n\n    return (\n      <MuiAlert\n        {...props}\n        action={action}\n      />\n    );\n  },\n)',
  },
  ...Alert.parameters,
};
