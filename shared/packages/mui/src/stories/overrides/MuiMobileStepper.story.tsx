/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { MobileStepperProps } from '@mui/material';\nimport { MobileStepper as MuiMobileStepper, Button } from '@mui/material';\nimport type { ElementType } from 'react';\nimport { useCallback, useState } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<MobileStepperProps, ElementType>(\n  'steppers',\n  'mobile-stepper',\n)(({ steps, ...props }) => {\n  const [activeStep, setActiveStep] = useState(0);\n\n  const handleChange = useCallback(\n    (direction: -1 | 1) => {\n      let guardFunction = Math.max;\n      let limit = 0;\n\n      if (direction === 1) {\n        guardFunction = Math.min;\n        limit = steps - 1;\n      }\n\n      return () => {\n        setActiveStep((current) => guardFunction(current + direction, limit));\n      };\n    },\n    [steps],\n  );\n\n  return (\n    <MuiMobileStepper\n      {...props}\n      steps={steps}\n      activeStep={activeStep}\n      nextButton={<Button onClick={handleChange(1)}>next</Button>}\n      backButton={<Button onClick={handleChange(-1)}>back</Button>}\n    />\n  );\n});\n\nexport const MobileStepper = Template.bind({});\n\nMobileStepper.argTypes = {\n  steps: {\n    control: { type: 'range', min: 3, max: 24 },\n  },\n  variant: {\n    options: ['progress', 'dots', 'text'],\n    control: {\n      type: 'select',\n    },\n  },\n  position: {\n    options: ['static', 'bottom', 'top'],\n    control: {\n      type: 'select',\n    },\n  },\n};\n\nMobileStepper.args = {\n  position: 'static',\n  variant: 'dots',\n  steps: 3,\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  MobileStepper: {
    startLoc: { col: 17, line: 8 },
    endLoc: { col: 2, line: 40 },
    startBody: { col: 17, line: 8 },
    endBody: { col: 2, line: 40 },
  },
};

import type { MobileStepperProps } from '@mui/material';
import { MobileStepper as MuiMobileStepper, Button } from '@mui/material';
import type { ElementType } from 'react';
import { useCallback, useState } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<MobileStepperProps, ElementType>(
  'steppers',
  'mobile-stepper'
)(({ steps, ...props }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = useCallback(
    (direction: -1 | 1) => {
      let guardFunction = Math.max;
      let limit = 0;

      if (direction === 1) {
        guardFunction = Math.min;
        limit = steps - 1;
      }

      return () => {
        setActiveStep((current) => guardFunction(current + direction, limit));
      };
    },
    [steps]
  );

  return (
    <MuiMobileStepper
      {...props}
      steps={steps}
      activeStep={activeStep}
      nextButton={<Button onClick={handleChange(1)}>next</Button>}
      backButton={<Button onClick={handleChange(-1)}>back</Button>}
    />
  );
});

export const MobileStepper = Template.bind({});

MobileStepper.argTypes = {
  steps: {
    control: { type: 'range', min: 3, max: 24 },
  },
  variant: {
    options: ['progress', 'dots', 'text'],
    control: {
      type: 'select',
    },
  },
  position: {
    options: ['static', 'bottom', 'top'],
    control: {
      type: 'select',
    },
  },
};

MobileStepper.args = {
  position: 'static',
  variant: 'dots',
  steps: 3,
};

MobileStepper.parameters = {
  storySource: {
    source:
      "withMaterialLink<MobileStepperProps, ElementType>(\n  'steppers',\n  'mobile-stepper',\n)(({ steps, ...props }) => {\n  const [activeStep, setActiveStep] = useState(0);\n\n  const handleChange = useCallback(\n    (direction: -1 | 1) => {\n      let guardFunction = Math.max;\n      let limit = 0;\n\n      if (direction === 1) {\n        guardFunction = Math.min;\n        limit = steps - 1;\n      }\n\n      return () => {\n        setActiveStep((current) => guardFunction(current + direction, limit));\n      };\n    },\n    [steps],\n  );\n\n  return (\n    <MuiMobileStepper\n      {...props}\n      steps={steps}\n      activeStep={activeStep}\n      nextButton={<Button onClick={handleChange(1)}>next</Button>}\n      backButton={<Button onClick={handleChange(-1)}>back</Button>}\n    />\n  );\n})",
  },
  ...MobileStepper.parameters,
};
