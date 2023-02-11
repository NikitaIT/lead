import { Box, Slider } from '@mui/material';

export const MuiSlider = function MuiSlider() {
  return (
    <>
      <Box m={2}>
        <Slider defaultValue={50} />
      </Box>
      <Box m={2}>
        <Slider defaultValue={[10, 100]} />
      </Box>
      <Box m={2}>
        <Slider valueLabelDisplay="auto" defaultValue={50} />
      </Box>
      <Box m={2}>
        <Slider valueLabelDisplay="auto" defaultValue={[10, 100]} />
      </Box>
      <Box m={2}>
        <Slider marks />
      </Box>
      <Box m={2}>
        <Slider marks defaultValue={[10, 100]} />
      </Box>
      <Box m={2}>
        <Slider marks valueLabelDisplay="auto" />
      </Box>
      <Box m={2}>
        <Slider marks valueLabelDisplay="auto" defaultValue={[10, 100]} />
      </Box>
      <Box m={2}>
        <Slider valueLabelDisplay="on" defaultValue={0} />
      </Box>
      <Box m={2}>
        <Slider valueLabelDisplay="on" defaultValue={[10, 100]} />
      </Box>
      <Box m={2}>
        <Slider marks valueLabelDisplay="on" defaultValue={0} />
      </Box>
      <Box m={2}>
        <Slider marks valueLabelDisplay="on" defaultValue={[10, 100]} />
      </Box>
    </>
  );
};
