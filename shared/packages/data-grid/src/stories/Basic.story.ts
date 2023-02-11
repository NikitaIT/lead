import { COLUMNS, ROWS } from './data';
import { Template } from './template.story';

export const Basic = Template.bind({});

Basic.args = {
  columns: COLUMNS,
  rows: ROWS,
};

Basic.parameters = {
  loki: { skip: true },
};



Basic.parameters = { storySource: { source: "Template.bind({})" }, ...Basic.parameters };