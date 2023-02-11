import { Grid, Box, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@lead/shared/packages/icons';

const variants = ['standard', 'filled', 'outlined'] as const;
const extraProps = [
  { placeholder: 'default' },
  { disabled: true, placeholder: 'disabled' },
  { label: 'Label', placeholder: 'with label' },
  { label: 'required', required: true, placeholder: 'required' },
  {
    label: 'required',
    required: true,
    helperText: 'Helper text',
    placeholder: 'With helper text',
  },
  { multiline: true, label: 'Multiline', placeholder: 'Multiline' },
  {
    InputProps: {
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon fontSize="small" />
        </InputAdornment>
      ),
      endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
    },
  },
] as const;

export const MuiTextField = function MuiTextField() {
  return (
    <Grid container>
      {variants.map((variant) => (
        <Grid key={`${variant}`} container>
          {extraProps.map((props, index) => (
            <Box
              key={`${variant}.${index}`}
              component="span"
              display="flex"
              alignItems="center"
              m={5}
            >
              <TextField variant={variant} {...props} />
            </Box>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};
