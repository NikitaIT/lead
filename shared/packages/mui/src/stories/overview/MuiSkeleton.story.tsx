import { Box, Stack, Skeleton } from '@mui/material';

export const MuiSkeleton = function MuiSkeleton() {
  return (
    <Box>
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton animation="wave" variant="text" />
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={210}
          height={118}
        />
      </Stack>
      <Stack spacing={1}>
        <Skeleton animation={false} variant="text" />
        <Skeleton animation={false} variant="circular" width={40} height={40} />
        <Skeleton
          animation={false}
          variant="rectangular"
          width={210}
          height={118}
        />
      </Stack>
    </Box>
  );
};
