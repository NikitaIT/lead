import { Stack } from '@mui/material';
import { useState } from 'react';

import Counter, { Counter as BaseComponent } from './Counter';
// import mdx from './Counter.mdx';

export default {
  title: 'Components/Counter',
  parameters: {
    docs: {
      // page: mdx,
    },

    options: {
      showPanel: true,
    },
  },
  component: BaseComponent,
};

export const BasicUsage = function BasicUsage() {
  return <Counter />;
};

export const Readonly = function Readonly() {
  return <Counter readOnly />;
};

export const ExpandOnFocus = function ExpandOnFocus() {
  return <Counter expandOnFocus size="medium" variant="text" />;
};

export const ExpandOnFocusManual = function ExpandOnFocusManual() {
  const [expanded, setIsExpanded] = useState(false);

  return (
    <Stack
      spacing={3}
      sx={{
        width: 300,
      }}
    >
      <Counter expandOnFocus expanded={expanded} size="large" variant="text" />
      <button
        type="button"
        onClick={() => setIsExpanded((current) => !current)}
      >
        Toggle counter
      </button>
    </Stack>
  );
};

export const ExpandOnFocusSizeLarge = function ExpandOnFocusSizeLarge() {
  return <Counter expandOnFocus size="large" variant="text" />;
};

export const VariantOutlinedColorPrimary =
  function VariantOutlinedColorPrimary() {
    return <Counter variant="outlined" color="primary" />;
  };

export const VariantContained = function VariantContained() {
  return <Counter variant="contained" />;
};

export const VariantContainedSizeLarge = function VariantContainedSizeLarge() {
  return <Counter size="large" variant="text" />;
};

export const VariantContainedColorPrimary =
  function VariantContainedColorPrimary() {
    return <Counter variant="contained" color="primary" />;
  };
export const VariantText = function VariantText() {
  return <Counter variant="text" />;
};

export const VariantTextSizeLarge = function VariantTextSizeLarge() {
  return <Counter size="large" variant="text" />;
};

export const VariantTextColorPrimary = function VariantTextColorPrimary() {
  return <Counter variant="text" color="primary" />;
};

export const MinAndMaxValue = function MinAndMaxValue() {
  return <Counter minValue={-1} maxValue={10} />;
};

export const ControlledExample = function ControlledExample() {
  const [value, setValue] = useState<number | '-' | ''>(4);

  return <Counter value={value} onChange={setValue} />;
};

export const DisabledExample = function DisabledExample() {
  const [value, setValue] = useState<number | '-' | ''>(4);

  return <Counter disabled value={value} onChange={setValue} />;
};
