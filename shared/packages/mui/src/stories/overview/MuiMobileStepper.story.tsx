import { Box, Button, MobileStepper } from '@mui/material';
import { useState, useCallback } from 'react';

export const MuiMobileStepper = function MuiMobileStepper() {
  const [activeStep, setActiveStep] = useState(4);

  const handleChange = useCallback((direction: -1 | 1) => {
    let guardFunction = Math.max;
    let limit = 0;

    if (direction === 1) {
      guardFunction = Math.min;
      limit = 8;
    }

    return () => {
      setActiveStep((current) => guardFunction(current + direction, limit));
    };
  }, []);

  return (
    <>
      <Box m={5}>
        <MobileStepper
          position="static"
          variant="dots"
          steps={9}
          activeStep={activeStep}
          nextButton={<Button onClick={handleChange(1)}>next</Button>}
          backButton={<Button onClick={handleChange(-1)}>back</Button>}
        />
      </Box>
      <Box m={5}>
        <MobileStepper
          position="static"
          variant="progress"
          steps={9}
          activeStep={activeStep}
          nextButton={<Button onClick={handleChange(1)}>next</Button>}
          backButton={<Button onClick={handleChange(-1)}>back</Button>}
        />
      </Box>
      <Box m={5}>
        <MobileStepper
          variant="text"
          position="static"
          steps={9}
          activeStep={activeStep}
          nextButton={<Button onClick={handleChange(1)}>next</Button>}
          backButton={<Button onClick={handleChange(-1)}>back</Button>}
        />
      </Box>
    </>
  );
};
