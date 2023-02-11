import { Box, LinearProgress } from '@mui/material';

const colors = ['primary', 'secondary'] as const;

export const MuiLinearProgress = function MuiLinearProgress() {
  return (
    <div>
      {colors.map((color) => (
        <Box key={`${color}`} m={2}>
          <Box component="span" m={2}>
            {color}
            <Box m={2}>
              <LinearProgress variant="indeterminate" color={color} />
            </Box>
            <Box m={2}>
              <LinearProgress variant="determinate" color={color} value={22} />
            </Box>
            <Box m={2}>
              <LinearProgress
                variant="buffer"
                color={color}
                value={22}
                valueBuffer={66}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </div>
  );
};
