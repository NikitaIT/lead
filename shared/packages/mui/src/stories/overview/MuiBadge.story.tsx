import { Badge, Box, Grid } from '@mui/material';
import {
  EmptyBasket,
  Heart,
  MiniBag,
  Notification,
} from '@lead/shared/packages/icons';

export const MuiBadge = function MuiBadge() {
  const values = [4, 23, 385, 1234];

  return (
    <>
      <Grid container sx={{ color: '#666' }}>
        <Box m={2}>
          <Badge badgeContent={2} overlap="circular">
            <Heart sx={{ fontSize: '3rem' }} />
          </Badge>
        </Box>
        <Box m={2}>
          <Badge color="primary" badgeContent={2} overlap="circular">
            <Heart sx={{ fontSize: '3rem' }} />
          </Badge>
        </Box>
        <Box m={2}>
          <Badge color="secondary" badgeContent={2} overlap="circular">
            <Heart sx={{ fontSize: '3rem' }} />
          </Badge>
        </Box>
        <Box m={2}>
          <Badge color="error" badgeContent={12} overlap="circular">
            <Heart sx={{ fontSize: '3rem' }} />
          </Badge>
        </Box>
      </Grid>
      <Grid container sx={{ color: '#666' }}>
        {values.map((x) => (
          <Box key={x} m={2}>
            <Badge
              color="primary"
              max={999}
              badgeContent={x}
              overlap="circular"
            >
              <MiniBag sx={{ fontSize: '3rem' }} />
            </Badge>
          </Box>
        ))}
      </Grid>
      <Grid container sx={{ color: '#666' }}>
        {values.map((x) => (
          <Box key={x} m={2}>
            <Badge color="error" max={999} badgeContent={x} overlap="circular">
              <Notification sx={{ fontSize: '3rem' }} />
            </Badge>
          </Box>
        ))}
      </Grid>
      <Grid container sx={{ color: '#666' }}>
        {values.map((x) => (
          <Box key={x} m={2}>
            <Badge
              color="primary"
              max={999}
              badgeContent={x}
              overlap="circular"
            >
              <EmptyBasket sx={{ fontSize: '3rem' }} />
            </Badge>
          </Box>
        ))}
      </Grid>
      <Grid container sx={{ color: '#666' }}>
        <Box m={2}>
          <Badge variant="dot" overlap="circular">
            <Notification />
          </Badge>
        </Box>
        <Box m={2}>
          <Badge color="primary" variant="dot" overlap="circular">
            <Notification />
          </Badge>
        </Box>
        <Box m={2}>
          <Badge color="secondary" variant="dot" overlap="circular">
            <Notification />
          </Badge>
        </Box>
        <Box m={2}>
          <Badge color="error" variant="dot" overlap="circular">
            <Notification />
          </Badge>
        </Box>
      </Grid>
    </>
  );
};
