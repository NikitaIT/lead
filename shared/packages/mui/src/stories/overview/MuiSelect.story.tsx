import type { SelectChangeEvent } from '@mui/material';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export const MuiSelect = function MuiSelect() {
  const [delivery, setDelivery] = useState('All');
  const [age, setAge] = useState<string[]>([]);

  const ageValues = [
    { name: 'Ten', val: '10' },
    { name: 'Twenty', val: '20' },
    { name: 'Thirty', val: '30' },
    { name: 'Forty', val: '40' },
    { name: 'Fifty', val: '50' },
  ];

  const handleDeliveryChange = (event: SelectChangeEvent) => {
    setDelivery(event.target.value);
  };

  const handleAgeChange = (event: SelectChangeEvent<typeof age>) => {
    const {
      target: { value },
    } = event;
    setAge(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Grid container>
      <Box m={5} minWidth={120}>
        <FormControl fullWidth>
          <InputLabel id="mui-select-label">Label</InputLabel>
          <Select labelId="mui-select-label">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box m={5} minWidth={120}>
        <FormControl fullWidth size="small">
          <InputLabel id="mui-select-small-label">Small</InputLabel>
          <Select labelId="mui-select-small-label">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box m={5} minWidth={120}>
        <FormControl fullWidth>
          <InputLabel id="mui-select-subheader-label">
            Select with subheader
          </InputLabel>
          <Select defaultValue="" labelId="mui-select-subheader-label">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <ListSubheader>Age</ListSubheader>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box m={5} minWidth={120}>
        <FormControl fullWidth>
          <InputLabel id="mui-select-multi-label">Select multiple</InputLabel>
          <Select
            multiple
            labelId="mui-select-multi-label"
            id="mui-select-multi"
            value={age}
            onChange={handleAgeChange}
          >
            {ageValues.map((item) => (
              <MenuItem key={item.val} value={item.val}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box m={5} minWidth={120}>
        <FormControl fullWidth>
          <InputLabel id="mui-select-placeholder-label">Placeholder</InputLabel>
          <Select
            displayEmpty
            labelId="mui-select-placeholder-label"
            id="mui-select-placeholder"
            value={age}
            onChange={handleAgeChange}
          >
            <MenuItem disabled value="">
              <em>Choose</em>
            </MenuItem>
            {ageValues.map((item) => (
              <MenuItem key={item.val} value={item.val}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        m={5}
        minWidth={100}
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          columnGap: 10,
          alignItems: 'center',
        }}
      >
        <Typography variant="body1">Show: </Typography>
        <FormControl variant="standard">
          <Select
            autoWidth
            disableUnderline
            id="mui-input-delivery"
            label="Show"
            value={delivery}
            onChange={handleDeliveryChange}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Home">Home delivery</MenuItem>
            <MenuItem value="Pickup points">Pickup points</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
};
