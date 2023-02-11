import { Box, Typography } from '@mui/material';

const colors = [
  undefined,
  'primary',
  'secondary',
  'initial',
  'textPrimary',
  'textSecondary',
  'error',
] as const;

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'overline',
  'button',
  'caption',
] as const;

export const MuiTypography = function MuiTypography() {
  return (
    <div>
      {colors.map((color) =>
        variants.map((variant) => (
          <Box key={`${variant}.${color}`} m={2}>
            <Typography variant={variant} color={color}>
              {variant} Typography {color}
            </Typography>
          </Box>
        ))
      )}
    </div>
  );
};
