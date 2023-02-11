import { ThemeProvider } from '@lead/shared/packages/mui';
import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';

import Toggle from '.';
// import mdx from './Toggle.mdx';

export default {
  title: 'Components/Toggle',
  parameters: {
    docs: {
      // page: mdx,
    },

    options: {
      showPanel: true,
    },
  },
  component: Toggle,
};

export const BasicUsage = function BasicUsage() {
  return (
    <Toggle
      firstText="first"
      secondText="second option in the switch component"
    />
  );
};

export const FullWidth = function FullWidth() {
  return (
    <Toggle
      fullWidth
      firstText="first option in the switch component"
      secondText="second"
    />
  );
};

export const TwoLines = function TwoLines() {
  return (
    <Toggle
      twoLines
      firstText="first"
      secondText="Some very long content that should be limited to max two lines"
    />
  );
};

export const FullWidthTwoLines = function FullWidthTwoLines() {
  return (
    <Toggle
      fullWidth
      twoLines
      firstText="Some very long content that should be limited to max two lines"
      secondText="second"
    />
  );
};

export const ControlledComponent = function ControlledComponent() {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = useCallback(
    ({ currentTarget: { checked } }: ChangeEvent<HTMLInputElement>) =>
      setIsChecked(checked),
    []
  );

  return (
    <Toggle
      checked={isChecked}
      firstText="first"
      secondText="second"
      onChange={handleChange}
    />
  );
};

export const DefaultChecked = function DefaultChecked() {
  return <Toggle defaultChecked firstText="first" secondText="second" />;
};

export const WithTheme = function WithTheme() {
  return (
    <ThemeProvider
      theme={{
        props: {
          MuiLeadToggle: {
            checked: true,
          },
        },
      }}
    >
      <Toggle firstText="test" secondText="second" />
    </ThemeProvider>
  );
};
