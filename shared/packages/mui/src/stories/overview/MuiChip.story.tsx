import { Box, Chip, Grid } from '@mui/material';

export const MuiChip = function MuiChip() {
  return (
    <>
      <Grid container>
        <Box m={2}>
          <Chip label="DEFAULT" />
        </Box>
        <Box m={2}>
          <Chip variant="outlined" label="DEFAULT" />
        </Box>
        <Box m={2}>
          <Chip clickable variant="outlined" label="CLICKABLE" />
        </Box>
        <Box m={2}>
          <Chip label="DEFAULT" size="medium" />
        </Box>
        <Box m={2}>
          <Chip variant="outlined" label="DEFAULT" size="medium" />
        </Box>
      </Grid>
      <Grid container>
        <Box m={2}>
          <Chip color="primary" label="PRIMARY" />
        </Box>
        <Box m={2}>
          <Chip variant="outlined" color="primary" label="PRIMARY" />
        </Box>
        <Box m={2}>
          <Chip
            clickable
            variant="outlined"
            color="primary"
            label="CLICKABLE"
          />
        </Box>
        <Box m={2}>
          <Chip color="primary" label="PRIMARY" size="medium" />
        </Box>
        <Box m={2}>
          <Chip
            variant="outlined"
            color="primary"
            label="PRIMARY"
            size="medium"
          />
        </Box>
      </Grid>
      <Grid container>
        <Box m={2}>
          <Chip color="secondary" label="SECONDARY" />
        </Box>
        <Box m={2}>
          <Chip variant="outlined" color="secondary" label="SECONDARY" />
        </Box>
        <Box m={2}>
          <Chip
            clickable
            variant="outlined"
            color="secondary"
            label="CLICKABLE"
          />
        </Box>
        <Box m={2}>
          <Chip color="secondary" label="SECONDARY" size="medium" />
        </Box>
        <Box m={2}>
          <Chip
            variant="outlined"
            color="secondary"
            label="SECONDARY"
            size="medium"
          />
        </Box>
      </Grid>
      <Grid container>
        <Box m={2}>
          <Chip color="offer" label="OFFER" />
        </Box>
        <Box m={2}>
          <Chip variant="outlined" color="offer" label="OFFER" />
        </Box>
        <Box m={2}>
          <Chip clickable variant="outlined" color="offer" label="CLICKABLE" />
        </Box>
        <Box m={2}>
          <Chip color="offer" label="OFFER" size="medium" />
        </Box>
        <Box m={2}>
          <Chip variant="outlined" color="offer" label="OFFER" size="medium" />
        </Box>
      </Grid>
      <Grid container>
        <Box m={2}>
          <Chip variant="rounded" color="secondary" label="secondary rounded" />
        </Box>
        <Box m={2}>
          {/* In order to show ChipDeleteButton we need to pass onDelete prop */}
          <Chip
            variant="rounded"
            label="secondary rounded onDelete"
            onDelete={() => {}}
          />
        </Box>
      </Grid>
    </>
  );
};
