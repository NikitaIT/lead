/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Link } from '@mui/material';

const colors = [
  undefined,
  'primary',
  'secondary',
  'textPrimary',
  'textSecondary',
  'error',
] as const;
const variants = [undefined, 'button', 'body1'] as const;
const extraProps = [{}, { underline: 'none' }] as const;

export const MuiLink = function MuiLink() {
  return (
    <div>
      {variants.map((variant) =>
        colors.map((color) => (
          <Box key={`${variant}.${color}`} m={2}>
            {extraProps.map((props, index) => (
              <Box key={`${variant}.${color}.${index}`} component="span" m={2}>
                <Link href="" variant={variant} color={color} {...props}>
                  {color} {variant}
                </Link>
              </Box>
            ))}
          </Box>
        ))
      )}
    </div>
  );
};
