import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { useState, useCallback } from 'react';

export const MuiStepper = function MuiStepper() {
  const [activeStep, setActiveStep] = useState(2);
  const handleChange = useCallback(
    (direction: number) => () =>
      setActiveStep((current) => current + direction),
    []
  );

  return (
    <>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Label 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Label 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Label 3</StepLabel>
        </Step>
        <Step>
          <StepLabel>Label 4</StepLabel>
        </Step>
      </Stepper>
      <Stepper alternativeLabel activeStep={activeStep}>
        <Step>
          <StepLabel>Label 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Label 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Label 3</StepLabel>
        </Step>
        <Step>
          <StepLabel>Label 4</StepLabel>
        </Step>
      </Stepper>
      <Button disabled={activeStep === 0} onClick={handleChange(-1)}>
        Prev
      </Button>
      <Button disabled={activeStep === 3} onClick={handleChange(1)}>
        Next
      </Button>
    </>
  );
};
