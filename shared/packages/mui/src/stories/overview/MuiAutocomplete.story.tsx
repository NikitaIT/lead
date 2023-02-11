import { Autocomplete, Box, Grid, TextField } from '@mui/material';
import type { SxProps, Theme } from '@mui/system';

const optionsString = [
  'The Godfather',
  'Pulp Fiction',
  'All the Old Knives',
  'The Shawshank Redemption',
  'Goodfellas',
  'The Silence of the Lambs',
  'Saving Private Ryan',
  'Back to the Future',
  'The Usual Suspects',
  'Once Upon a Time in the West',
  'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  'Eternal Sunshine of the Spotless Mind',
];
const optionsObject = [
  { title: 'The Godfather' },
  { title: 'Pulp Fiction' },
  { title: 'All the Old Knives' },
  { title: 'The Shawshank Redemption' },
  { title: 'Goodfellas' },
  { title: 'The Silence of the Lambs' },
  { title: 'Saving Private Ryan' },
  { title: 'Back to the Future' },
  { title: 'The Usual Suspects' },
  { title: 'Once Upon a Time in the West' },
  {
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  },
  { title: 'Eternal Sunshine of the Spotless Mind' },
];

const sx: SxProps<Theme> = { width: 300 };

export const MuiAutocomplete = function MuiAutocomplete() {
  return (
    <Grid container>
      <Box m={2}>
        {/* This shows normal basic usage */}
        <Autocomplete
          id="options-string"
          sx={sx}
          options={optionsString}
          renderInput={(params) => (
            <TextField {...params} label="Movie (array of strings)" />
          )}
        />
      </Box>
      <Box m={2}>
        {/* This shows how to render options from array of objects */}
        <Autocomplete
          id="options-object"
          sx={sx}
          options={optionsObject}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} label="Movie (array of objects)" />
          )}
        />
      </Box>
      <Box m={2}>
        {/* This enables user to select multiple */}
        <Autocomplete
          multiple
          id="options-multiple"
          sx={sx}
          options={optionsString}
          renderInput={(params) => (
            <TextField {...params} label="Movie (multiple selection)" />
          )}
        />
      </Box>
      <Box m={2}>
        {/* This enables user to enter anything, without selecting one of the provided options */}
        <Autocomplete
          freeSolo
          id="options-free-solo"
          sx={sx}
          options={optionsString}
          renderInput={(params) => (
            <TextField {...params} label="Movie (allow free text)" />
          )}
        />
      </Box>
      <Box m={2}>
        {/* This disables react portal which material ui uses on this component */}
        <Autocomplete
          disablePortal
          id="options-no-portal"
          sx={sx}
          options={optionsString}
          renderInput={(params) => (
            <TextField {...params} label="Movie (no portal)" />
          )}
        />
      </Box>
      <Box m={2}>
        {/* Open for inspecting list items */}
        <Autocomplete
          open
          id="options-string"
          sx={sx}
          options={optionsString}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Movie (open for inspecting list items)"
            />
          )}
        />
      </Box>
    </Grid>
  );
};
