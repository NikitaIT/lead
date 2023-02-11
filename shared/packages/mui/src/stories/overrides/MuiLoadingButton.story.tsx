/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { LoadingButtonProps } from '@mui/lab';\nimport { LoadingButton as MuiLoadingButton } from '@mui/lab';\nimport { Add } from '@lead/shared/packages/icons';\nimport type { ElementType } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<LoadingButtonProps, ElementType>(\n  'buttons',\n  'loading-button',\n)((props) => {\n  let extraProps: LoadingButtonProps = {};\n  if (props.loadingPosition === 'start') {\n    extraProps = {\n      startIcon: <Add />,\n    };\n  } else if (props.loadingPosition === 'end') {\n    extraProps = {\n      endIcon: <Add />,\n    };\n  }\n\n  return (\n    <MuiLoadingButton\n      {...extraProps}\n      {...props}\n    />\n  );\n});\n\nexport const LoadingButton = Template.bind({});\n\nLoadingButton.argTypes = {\n  children: {\n    control: {\n      type: 'text',\n    },\n  },\n  loadingPosition: {\n    options: ['start', 'end', 'center', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  size: {\n    options: ['small', 'medium', 'large', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  variant: {\n    options: ['text', 'contained', 'outlined', 'frontPage', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  color: {\n    options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'default', undefined],\n    control: {\n      type: 'select',\n    },\n  },\n  disabled: {\n    type: 'boolean',\n  },\n  loading: {\n    type: 'boolean',\n  },\n};\n\nLoadingButton.args = {\n  children: 'Content',\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  LoadingButton: {
    startLoc: { col: 17, line: 8 },
    endLoc: { col: 2, line: 29 },
    startBody: { col: 17, line: 8 },
    endBody: { col: 2, line: 29 },
  },
};

import type { LoadingButtonProps } from '@mui/lab';
import { LoadingButton as MuiLoadingButton } from '@mui/lab';
import { Add } from '@lead/shared/packages/icons';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<LoadingButtonProps, ElementType>(
  'buttons',
  'loading-button'
)((props) => {
  let extraProps: LoadingButtonProps = {};
  if (props.loadingPosition === 'start') {
    extraProps = {
      startIcon: <Add />,
    };
  } else if (props.loadingPosition === 'end') {
    extraProps = {
      endIcon: <Add />,
    };
  }

  return <MuiLoadingButton {...extraProps} {...props} />;
});

export const LoadingButton = Template.bind({});

LoadingButton.argTypes = {
  children: {
    control: {
      type: 'text',
    },
  },
  loadingPosition: {
    options: ['start', 'end', 'center', undefined],
    control: {
      type: 'select',
    },
  },
  size: {
    options: ['small', 'medium', 'large', undefined],
    control: {
      type: 'select',
    },
  },
  variant: {
    options: ['text', 'contained', 'outlined', 'frontPage', undefined],
    control: {
      type: 'select',
    },
  },
  color: {
    options: [
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'error',
      'default',
      undefined,
    ],
    control: {
      type: 'select',
    },
  },
  disabled: {
    type: 'boolean',
  },
  loading: {
    type: 'boolean',
  },
};

LoadingButton.args = {
  children: 'Content',
};

LoadingButton.parameters = {
  storySource: {
    source:
      "withMaterialLink<LoadingButtonProps, ElementType>(\n  'buttons',\n  'loading-button',\n)((props) => {\n  let extraProps: LoadingButtonProps = {};\n  if (props.loadingPosition === 'start') {\n    extraProps = {\n      startIcon: <Add />,\n    };\n  } else if (props.loadingPosition === 'end') {\n    extraProps = {\n      endIcon: <Add />,\n    };\n  }\n\n  return (\n    <MuiLoadingButton\n      {...extraProps}\n      {...props}\n    />\n  );\n})",
  },
  ...LoadingButton.parameters,
};
