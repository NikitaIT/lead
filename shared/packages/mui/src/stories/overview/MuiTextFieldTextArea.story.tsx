import { Box, TextField } from '@mui/material';

export const MuiTextFieldTextArea = function MuiTextFieldTextArea() {
  return (
    <>
      <Box mb={5}>
        <TextField
          multiline
          fullWidth
          defaultValue="Test value"
          variant="outlined"
          rows="22"
          label="Text area"
        />
      </Box>
      <TextField
        multiline
        fullWidth
        disabled
        variant="outlined"
        rows="22"
        label="Text area disabled"
        value="Test value"
      />
    </>
  );
};
