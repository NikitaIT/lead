import { Tooltip } from '@mui/material';
import { MouseEventHandler } from 'react';
import { IconShape } from '../IconShape';
import { IconWrap } from '../IconWrap';

function selectNode(node: HTMLParagraphElement) {
  // Clear any current selection
  const selection = window.getSelection();
  selection?.removeAllRanges();
  window.getSelection()?.removeAllRanges();

  // Select code
  const range = document.createRange();
  range.selectNodeContents(node);
  selection?.addRange(range);

  document.execCommand('copy');
}

const handleKeyClick: MouseEventHandler<HTMLParagraphElement> = (event) => {
  selectNode(event.currentTarget);
};

export const IconsList = ({ icons = [] }: { icons: IconShape[] }) => {
  const iconsList = icons.map(({ Icon, key }) => (
    <IconWrap key={key} className="markdown-body">
      <Icon
        sx={{
          fontSize: 40,
          marginBottom: 2,
          color: 'text.primary',
        }}
      />
      <Tooltip title="Click to copy name">
        <p onClick={handleKeyClick}>{key}</p>
      </Tooltip>
    </IconWrap>
  ));

  return <div>{iconsList}</div>;
};
