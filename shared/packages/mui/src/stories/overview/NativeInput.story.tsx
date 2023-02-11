import { Grid, Button, Typography } from '@mui/material';
import { DocumentFilled } from '@lead/shared/packages/icons';

const variants = [
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'image',
  'month',
  'number',
  'range',
  'tel',
  'time',
  'url',
  'week',
] as const;

export const NativeInput = function NativeInput() {
  return (
    <Grid
      container
      direction="column"
      spacing={4}
      style={{ minHeight: '600px' }}
    >
      {variants.map((current) => (
        <Grid key={current} item>
          <Typography component="div">
            input type=
            <Typography component="span" variant="body2">
              &quot;{current}&quot;
            </Typography>
            : <input type={current} />
          </Typography>
        </Grid>
      ))}
      <Grid item>
        <Button
          rel="noreferrer noopener"
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
          startIcon={<DocumentFilled />}
        >
          Read more
        </Button>
      </Grid>
    </Grid>
  );
};
