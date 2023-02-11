/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { StepperProps } from '@mui/material';\nimport { Button, Step, StepLabel, Stepper as MuiStepper } from '@mui/material';\nimport type { ElementType } from 'react';\nimport { useCallback, useState } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\ninterface ExtendedStepperProps extends StepperProps {\n  label?: string;\n}\n\nconst steps = [1, 2, 3];\n\nconst Template = withMaterialLink<ExtendedStepperProps, ElementType>(\n  'steppers',\n  'stepper',\n)(({ label, ...props }) => {\n  const [activeStep, setActiveStep] = useState(0);\n  const handleChange = useCallback(\n    (direction: number) => () => setActiveStep((current) => current + direction),\n    [],\n  );\n\n  return (\n    <>\n      <MuiStepper\n        {...props}\n        activeStep={activeStep}\n      >\n        {steps.map((item) => (\n          <Step key={item}>\n            <StepLabel>{label ? `${label} ${item}` : null}</StepLabel>\n          </Step>\n        ))}\n      </MuiStepper>\n      <Button\n        disabled={activeStep === 0}\n        onClick={handleChange(-1)}\n      >\n        Prev\n      </Button>\n      <Button\n        disabled={activeStep === 2}\n        onClick={handleChange(1)}\n      >\n        Next\n      </Button>\n    </>\n  );\n});\n\nexport const Stepper = Template.bind({});\n\nStepper.argTypes = {\n  label: {\n    control: {\n      type: 'text',\n    },\n  },\n  alternativeLabel: {\n    type: 'boolean',\n  },\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Stepper: {
    startLoc: { col: 17, line: 14 },
    endLoc: { col: 2, line: 50 },
    startBody: { col: 17, line: 14 },
    endBody: { col: 2, line: 50 },
  },
};

import type { StepperProps } from '@mui/material';
import { Button, Step, StepLabel, Stepper as MuiStepper } from '@mui/material';
import type { ElementType } from 'react';
import { useCallback, useState } from 'react';

import { withMaterialLink } from '../withMaterialLink';

interface ExtendedStepperProps extends StepperProps {
  label?: string;
}

const steps = [1, 2, 3];

const Template = withMaterialLink<ExtendedStepperProps, ElementType>(
  'steppers',
  'stepper'
)(({ label, ...props }) => {
  const [activeStep, setActiveStep] = useState(0);
  const handleChange = useCallback(
    (direction: number) => () =>
      setActiveStep((current) => current + direction),
    []
  );

  return (
    <>
      <MuiStepper {...props} activeStep={activeStep}>
        {steps.map((item) => (
          <Step key={item}>
            <StepLabel>{label ? `${label} ${item}` : null}</StepLabel>
          </Step>
        ))}
      </MuiStepper>
      <Button disabled={activeStep === 0} onClick={handleChange(-1)}>
        Prev
      </Button>
      <Button disabled={activeStep === 2} onClick={handleChange(1)}>
        Next
      </Button>
    </>
  );
});

export const Stepper = Template.bind({});

Stepper.argTypes = {
  label: {
    control: {
      type: 'text',
    },
  },
  alternativeLabel: {
    type: 'boolean',
  },
};

Stepper.parameters = {
  storySource: {
    source:
      "withMaterialLink<ExtendedStepperProps, ElementType>(\n  'steppers',\n  'stepper',\n)(({ label, ...props }) => {\n  const [activeStep, setActiveStep] = useState(0);\n  const handleChange = useCallback(\n    (direction: number) => () => setActiveStep((current) => current + direction),\n    [],\n  );\n\n  return (\n    <>\n      <MuiStepper\n        {...props}\n        activeStep={activeStep}\n      >\n        {steps.map((item) => (\n          <Step key={item}>\n            <StepLabel>{label ? `${label} ${item}` : null}</StepLabel>\n          </Step>\n        ))}\n      </MuiStepper>\n      <Button\n        disabled={activeStep === 0}\n        onClick={handleChange(-1)}\n      >\n        Prev\n      </Button>\n      <Button\n        disabled={activeStep === 2}\n        onClick={handleChange(1)}\n      >\n        Next\n      </Button>\n    </>\n  );\n})",
  },
  ...Stepper.parameters,
};
