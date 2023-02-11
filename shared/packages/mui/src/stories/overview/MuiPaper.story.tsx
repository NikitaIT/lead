import { Box, Typography, Paper } from '@mui/material';

export const MuiPaper = function MuiPaper() {
  return (
    <>
      <Box m={2}>
        <Paper>
          <Box p={5}>
            <Typography variant="h4">Paper content default</Typography>
          </Box>
        </Paper>
      </Box>
      <Box m={2}>
        <Paper variant="outlined">
          <Box p={5}>
            <Typography variant="h4">Paper content outlined</Typography>
          </Box>
        </Paper>
      </Box>
      <Box m={2}>
        <Paper square variant="outlined">
          <Box p={5}>
            <Typography variant="h4">Paper content square outlined</Typography>
          </Box>
        </Paper>
      </Box>
      <Box m={2}>
        <Paper square>
          <Box p={5}>
            <Typography variant="h4">Paper content square default</Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
