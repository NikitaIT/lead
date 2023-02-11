import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import type { ChangeEvent } from 'react';
import { useState, useCallback } from 'react';

const colors = ['default', 'primary', 'secondary'] as const;
const extraProps = [{}, { disabled: true }] as const;

export const MuiRadio = function MuiRadio() {
  const [value, setValue] = useState<string>(colors[0]);

  const handleChange = useCallback(
    ({ target: { value: newValue } }: ChangeEvent<HTMLInputElement>) => {
      setValue(newValue);
    },
    []
  );

  return (
    <div>
      {colors.map((color) => (
        <RadioGroup
          key={`${color}`}
          aria-label="demo"
          name="demo"
          value={value}
          onChange={handleChange}
        >
          <Box m={2}>
            {extraProps.map((props, index) => (
              <Box key={`${color}.${index}`} component="span" m={2}>
                <FormControlLabel
                  value={color}
                  control={<Radio color={color} {...props} />}
                  label={`Label ${color}`}
                />
              </Box>
            ))}
          </Box>
        </RadioGroup>
      ))}
    </div>
  );
};
