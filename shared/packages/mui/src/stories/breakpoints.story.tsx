import { styled, Box, useTheme, Typography } from '@mui/material';

const Breakpoint = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '70vh',
  borderRight: `2px solid ${theme.palette.grey[900]}`,
}));

const Caption = styled(Typography)({
  position: 'absolute',
  right: 10,
  top: '50%',
});

const CaptionXs = styled(Caption)({
  left: '10px',
  rigth: '50px',
  width: '120px',
});

export const Breakpoints = function Breakpoints() {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative' }}>
      <Typography gutterBottom variant="h2">
        Breakpoints
      </Typography>
      <Breakpoint sx={{ width: `${theme.breakpoints.values.xl}px` }}>
        <Caption variant="h4">XL: {theme.breakpoints.values.xl}px</Caption>
        <Breakpoint sx={{ width: `${theme.breakpoints.values.lg}px` }}>
          <Caption variant="h4">LG: {theme.breakpoints.values.lg}px</Caption>
          <Breakpoint sx={{ width: `${theme.breakpoints.values.md}px` }}>
            <Caption variant="h4">MD: {theme.breakpoints.values.md}px</Caption>
            <Breakpoint sx={{ width: `${theme.breakpoints.values.sm}px` }}>
              <Caption variant="h4">
                SM: {theme.breakpoints.values.sm}px
              </Caption>
              <Breakpoint sx={{ width: `${theme.breakpoints.values.xs}px` }}>
                <CaptionXs variant="h4">
                  XS: {theme.breakpoints.values.xs}px
                </CaptionXs>
              </Breakpoint>
            </Breakpoint>
          </Breakpoint>
        </Breakpoint>
      </Breakpoint>
    </Box>
  );
};
