import { Box, Button } from '../..';

export const ExtraMuiButtons = function ExtraMuiButtons() {
  return (
    <Box>
      <Box
        sx={{
          padding: [4, 6],
          backgroundColor: '#E5E5E5',
        }}
      >
        <Button color="frontPage">Default FrontPage</Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          margin: 2,
        }}
      >
        <Box
          sx={{
            gap: '5px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Button color="superApp" variant="contained" disableElevation={false}>
            SuperApp contained
          </Button>
          <Button disabled color="superApp" variant="contained">
            SuperApp contained
          </Button>
        </Box>
        <Box
          sx={{
            gap: '5px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Button color="superApp" variant="outlined">
            SuperApp contained
          </Button>
          <Button disabled color="superApp" variant="outlined">
            SuperApp contained
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
