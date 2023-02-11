import { Add } from '@lead/shared/packages/icons';

import type { IconButtonColors } from '.';
import IconButton from './IconButton';
// import mdx from './IconButton.mdx';

export default {
  title: 'Components/Icon button',
  parameters: {
    docs: {
      // page: mdx,
    },
    options: {
      showPanel: true,
    },
  },
  component: IconButton,
};

const colours: IconButtonColors[] = [
  'primary',
  'secondary',
  'default',
  'frontPage',
  'error',
  'success',
  'info',
  'inherit',
  'warning',
];

const gridStyle = (cols: number) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${cols}, auto)`,
  gap: '10px',
  justifyItems: 'center',
});

export const Usage = function Usage() {
  return (
    <IconButton>
      <Add fontSize="inherit" />
    </IconButton>
  );
};

export const Outlined = function Outlined() {
  return (
    <div style={gridStyle(10)}>
      {colours.map((color) => (
        <span key={color}>{color}</span>
      ))}
      <span>disabled</span>
      {colours.map((color) => (
        <span key={color}>
          <IconButton variant="outlined" color={color} size="small">
            <Add fontSize="inherit" />
          </IconButton>
        </span>
      ))}
      <span>
        <IconButton disabled variant="outlined" size="small">
          <Add fontSize="inherit" />
        </IconButton>
      </span>
      {colours.map((color) => (
        <span key={color}>
          <IconButton variant="outlined" color={color}>
            <Add fontSize="inherit" />
          </IconButton>
        </span>
      ))}
      <span>
        <IconButton disabled variant="outlined">
          <Add fontSize="inherit" />
        </IconButton>
      </span>
      {colours.map((color) => (
        <span key={color}>
          <IconButton key={color} variant="outlined" color={color} size="large">
            <Add fontSize="inherit" />
          </IconButton>
        </span>
      ))}
      <span>
        <IconButton disabled variant="outlined" size="large">
          <Add fontSize="inherit" />
        </IconButton>
      </span>
    </div>
  );
};

export const Contained = function Contained() {
  return (
    <div style={gridStyle(10)}>
      {colours.map((color) => (
        <span key={color}>{color}</span>
      ))}
      <span>disabled</span>
      {colours.map((color) => (
        <span key={color}>
          <IconButton variant="contained" color={color} size="small">
            <Add fontSize="inherit" />
          </IconButton>
        </span>
      ))}
      <span>
        <IconButton disabled variant="contained" size="small">
          <Add fontSize="inherit" />
        </IconButton>
      </span>
      {colours.map((color) => (
        <span key={color}>
          <IconButton variant="contained" color={color}>
            <Add fontSize="inherit" />
          </IconButton>
        </span>
      ))}
      <span>
        <IconButton disabled variant="contained">
          <Add fontSize="inherit" />
        </IconButton>
      </span>
      {colours.map((color) => (
        <span key={color}>
          <IconButton
            key={color}
            variant="contained"
            color={color}
            size="large"
          >
            <Add fontSize="inherit" />
          </IconButton>
        </span>
      ))}
      <span>
        <IconButton disabled variant="contained" size="large">
          <Add fontSize="inherit" />
        </IconButton>
      </span>
    </div>
  );
};

export const Text = function Text() {
  return (
    <div style={gridStyle(10)}>
      {colours.map((color) => (
        <span key={color}>{color}</span>
      ))}
      <span>disabled</span>
      {colours.map((color) => (
        <span key={color}>
          <IconButton variant="text" color={color} size="small">
            <Add fontSize="inherit" />
          </IconButton>
        </span>
      ))}
      <span>
        <IconButton disabled variant="text" size="small">
          <Add fontSize="inherit" />
        </IconButton>
      </span>
      {colours.map((color) => (
        <span key={color}>
          <IconButton variant="text" color={color}>
            <Add fontSize="inherit" />
          </IconButton>
        </span>
      ))}
      <span>
        <IconButton disabled variant="text">
          <Add fontSize="inherit" />
        </IconButton>
      </span>
      {colours.map((color) => (
        <span key={color}>
          <IconButton key={color} variant="text" color={color} size="large">
            <Add fontSize="inherit" />
          </IconButton>
        </span>
      ))}
      <span>
        <IconButton disabled variant="text" size="large">
          <Add fontSize="inherit" />
        </IconButton>
      </span>
    </div>
  );
};

export const FontSizeManipulation = function FontSizeManipulation() {
  return (
    <div style={gridStyle(5)}>
      <span>&nbsp;</span>
      <span>fontSize inherit</span>
      <span>fontSize small</span>
      <span>fontSize medium</span>
      <span>fontSize large</span>
      <span>SMALL</span>
      <span>
        <IconButton variant="contained" color="error" size="small">
          <Add fontSize="inherit" />
        </IconButton>
      </span>
      <span>
        <IconButton variant="contained" color="error" size="small">
          <Add fontSize="small" />
        </IconButton>
      </span>
      <span>
        <IconButton variant="contained" color="error" size="small">
          <Add fontSize="medium" />
        </IconButton>
      </span>
      <span>
        <IconButton variant="contained" color="error" size="small">
          <Add fontSize="large" />
        </IconButton>
      </span>
      <span>MEDIUM</span>
      <span>
        <IconButton variant="contained" color="error">
          <Add fontSize="inherit" />
        </IconButton>
      </span>
      <span>
        <IconButton variant="contained" color="error">
          <Add fontSize="small" />
        </IconButton>
      </span>
      <span>
        <IconButton variant="contained" color="error">
          <Add fontSize="medium" />
        </IconButton>
      </span>
      <span>
        <IconButton variant="contained" color="error">
          <Add fontSize="large" />
        </IconButton>
      </span>
      <span>LARGE</span>
      <span>
        <IconButton variant="contained" color="error" size="large">
          <Add fontSize="inherit" />
        </IconButton>
      </span>
      <span>
        <IconButton variant="contained" color="error" size="large">
          <Add fontSize="small" />
        </IconButton>
      </span>
      <span>
        <IconButton variant="contained" color="error" size="large">
          <Add fontSize="medium" />
        </IconButton>
      </span>
      <span>
        <IconButton variant="contained" color="error" size="large">
          <Add fontSize="large" />
        </IconButton>
      </span>
    </div>
  );
};

export const DeleteButton = function DeleteButton() {
  return (
    <IconButton variant="contained" color="default" size="small">
      <Add
        fontSize="small"
        sx={{ transform: 'rotate(45deg)', fontSize: '1.4rem' }}
      />
    </IconButton>
  );
};
