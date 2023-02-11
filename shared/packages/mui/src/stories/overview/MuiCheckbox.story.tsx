import { Box, Checkbox, FormControlLabel } from '@mui/material';

const colors = ['default', 'primary', 'secondary'] as const;
const extraProps = [
  {},
  { disabled: true },
  { defaultChecked: true, disabled: true },
] as const;

export const MuiCheckbox = function MuiCheckbox() {
  return (
    <div>
      {colors.map((color) => (
        <Box key={`${color}`} m={2}>
          {extraProps.map((props, index) => (
            <Box key={`${color}.${index}`} component="span" m={2}>
              <FormControlLabel
                control={<Checkbox color={color} {...props} />}
                label={`Label ${color}`}
              />
            </Box>
          ))}
        </Box>
      ))}
    </div>
  );
};
