import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
import { Add } from '@lead/shared/packages/icons';

export const MuiLoadingButton = function MuiLoadingButton() {
  return (
    <>
      <Box
        sx={{
          display: 'block',
        }}
      >
        <LoadingButton>Loading button</LoadingButton>
        <LoadingButton loading>Loading button</LoadingButton>
        <LoadingButton loading startIcon={<Add />} loadingPosition="start">
          Loading button
        </LoadingButton>
        <LoadingButton loading endIcon={<Add />} loadingPosition="end">
          Loading button
        </LoadingButton>
      </Box>
      <Box
        sx={{
          display: 'block',
        }}
      >
        <LoadingButton variant="contained">Loading button</LoadingButton>
        <LoadingButton loading variant="contained">
          Loading button
        </LoadingButton>
        <LoadingButton
          loading
          variant="contained"
          startIcon={<Add />}
          loadingPosition="start"
        >
          Loading button
        </LoadingButton>
        <LoadingButton
          loading
          variant="contained"
          endIcon={<Add />}
          loadingPosition="end"
        >
          Loading button
        </LoadingButton>
      </Box>
      <Box
        sx={{
          display: 'block',
        }}
      >
        <LoadingButton variant="outlined">Loading button</LoadingButton>
        <LoadingButton loading variant="outlined">
          Loading button
        </LoadingButton>
        <LoadingButton
          loading
          variant="outlined"
          startIcon={<Add />}
          loadingPosition="start"
        >
          Loading button
        </LoadingButton>
        <LoadingButton
          loading
          variant="outlined"
          endIcon={<Add />}
          loadingPosition="end"
        >
          Loading button
        </LoadingButton>
      </Box>
    </>
  );
};
