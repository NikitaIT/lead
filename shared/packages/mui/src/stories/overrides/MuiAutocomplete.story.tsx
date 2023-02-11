import type { AutocompleteProps } from '@mui/material';
import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';
import type { ElementType } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const options = ['The Godfather', 'Pulp Fiction'];

type Props = AutocompleteProps<string, boolean, false, false>;

const Template = withMaterialLink<Props, ElementType>(
  'autocomplete',
  'autocomplete'
)(({ ...props }) => (
  <MuiAutocomplete
    {...props}
    options={options}
    renderInput={(params) => <TextField {...params} label="Option" />}
  />
));

export const Autocomplete = Template.bind({});

Autocomplete.argTypes = {
  multiple: {
    control: {
      type: 'boolean',
    },
  },
  autoComplete: {
    control: {
      type: 'boolean',
    },
  },
  size: {
    control: {
      type: 'select',
    },
    options: ['small', 'medium'] as Array<Props['size']>,
  },
  onChange: { action: 'change' },
  disabled: {
    type: 'boolean',
  },
};

Autocomplete.args = {
  color: 'primary',
  multiple: false,
  autoComplete: false,
};
