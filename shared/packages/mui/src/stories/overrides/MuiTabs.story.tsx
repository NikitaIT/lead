/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ =
  "import type { TabsProps } from '@mui/material';\nimport { Tabs as MuiTabs, Tab } from '@mui/material';\nimport type { ElementType } from 'react';\nimport { useState, useCallback } from 'react';\n\nimport { withMaterialLink } from '../withMaterialLink';\n\nconst Template = withMaterialLink<TabsProps & { childCount: number }, ElementType>('tabs')(\n  ({ childCount, ...props }) => {\n    const [value, setValue] = useState(0);\n    const handleChange = useCallback((_: unknown, newValue: number) => {\n      setValue(newValue);\n    }, []);\n\n    return (\n      <MuiTabs\n        {...props}\n        value={value}\n        onChange={handleChange}\n      >\n        {Array.from({ length: childCount }).map((_, index) => (\n          <Tab\n            key={`${index + 1} Tab`}\n            label={`${index} Tab`}\n          />\n        ))}\n      </MuiTabs>\n    );\n  },\n);\n\nexport const Tabs = Template.bind({});\n\nTabs.parameters = {\n  loki: { skip: true },\n};\n\nTabs.argTypes = {\n  variant: {\n    control: {\n      type: 'select',\n    },\n    options: ['fullWidth', 'standard', 'scrollable'],\n  },\n  childCount: {\n    control: { type: 'range', min: 3, max: 24 },\n  },\n  centered: {\n    type: 'boolean',\n  },\n};\n\nTabs.args = {\n  variant: 'standard',\n  childCount: 3,\n  centered: true,\n};\n";
// @ts-ignore
var __LOCATIONS_MAP__ = {
  Tabs: {
    startLoc: { col: 17, line: 8 },
    endLoc: { col: 1, line: 30 },
    startBody: { col: 17, line: 8 },
    endBody: { col: 1, line: 30 },
  },
};

import type { TabsProps } from '@mui/material';
import { Tabs as MuiTabs, Tab } from '@mui/material';
import type { ElementType } from 'react';
import { useState, useCallback } from 'react';

import { withMaterialLink } from '../withMaterialLink';

const Template = withMaterialLink<
  TabsProps & { childCount: number },
  ElementType
>('tabs')(({ childCount, ...props }) => {
  const [value, setValue] = useState(0);
  const handleChange = useCallback((_: unknown, newValue: number) => {
    setValue(newValue);
  }, []);

  return (
    <MuiTabs {...props} value={value} onChange={handleChange}>
      {Array.from({ length: childCount }).map((_, index) => (
        <Tab key={`${index + 1} Tab`} label={`${index} Tab`} />
      ))}
    </MuiTabs>
  );
});

export const Tabs = Template.bind({});

Tabs.parameters = {
  loki: { skip: true },
};

Tabs.argTypes = {
  variant: {
    control: {
      type: 'select',
    },
    options: ['fullWidth', 'standard', 'scrollable'],
  },
  childCount: {
    control: { type: 'range', min: 3, max: 24 },
  },
  centered: {
    type: 'boolean',
  },
};

Tabs.args = {
  variant: 'standard',
  childCount: 3,
  centered: true,
};

Tabs.parameters = {
  storySource: {
    source:
      "withMaterialLink<TabsProps & { childCount: number }, ElementType>('tabs')(\n  ({ childCount, ...props }) => {\n    const [value, setValue] = useState(0);\n    const handleChange = useCallback((_: unknown, newValue: number) => {\n      setValue(newValue);\n    }, []);\n\n    return (\n      <MuiTabs\n        {...props}\n        value={value}\n        onChange={handleChange}\n      >\n        {Array.from({ length: childCount }).map((_, index) => (\n          <Tab\n            key={`${index + 1} Tab`}\n            label={`${index} Tab`}\n          />\n        ))}\n      </MuiTabs>\n    );\n  },\n)",
  },
  ...Tabs.parameters,
};
