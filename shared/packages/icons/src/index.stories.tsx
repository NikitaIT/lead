import type { SvgIconTypeMap } from '@mui/material';
import {
  Grid,
  IconButton,
  InputBase,
  Paper,
  Tooltip,
  Typography,
  styled,
} from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { ChangeEvent, MouseEventHandler } from 'react';
import {
  useEffect,
  useMemo,
  useState,
  useCallback,
  useDeferredValue,
} from 'react';
import { IconShape, IconsList } from './IconExplorer';

import * as OriginalIcons from '.';
import { Search as SearchIcon } from '.';

// Ugly workaround for star import
// Icons are polluted with some dash symbol
const Icons = Object.fromEntries(
  Object.keys(OriginalIcons)
    .filter((name) => !name.startsWith('_'))
    .map((name) => [name, OriginalIcons[name as keyof typeof OriginalIcons]])
) as typeof OriginalIcons;

export default {
  title: 'Icons',
  component: Icons,
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

const allIconsMap: {
  [key: string]: IconShape;
} = {};

const allIconsKeyMap: string[] = [];

function escapeRegExp(value: string) {
  return value.replace(/[$()*+.?[\\\]^{|}]/g, '\\$&'); // $& means the whole matched string
}

function searchIcons(value: string) {
  const searchRegex = new RegExp(escapeRegExp(value), 'i');

  return allIconsKeyMap.reduce<string[]>((acc, current) => {
    if (searchRegex.test(current)) {
      return [...acc, current];
    }

    return acc;
  }, []);
}

const allIcons: IconShape[] = Object.keys(Icons)
  .sort((a, b) => a.localeCompare(b))
  .filter((item) => item !== '__esModule')
  .map((key) => {
    const icon = {
      key,
      id: key,
      Icon: Icons[key as keyof typeof Icons],
    };
    allIconsKeyMap.push(key);

    allIconsMap[key] = icon;

    return icon;
  });

export const Overview = function Overview() {
  const [keys, setKeys] = useState<string[] | null>(null);
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  const icons = useMemo(
    () => (keys === null ? allIcons : keys.map((key) => allIconsMap[key])),
    [keys]
  );

  useEffect(() => {
    if (deferredValue === '') {
      setKeys(null);
    } else {
      const newKeys = searchIcons(deferredValue);
      setKeys(newKeys);
    }
  }, [deferredValue]);

  const handleChange = useCallback(
    ({
      currentTarget: { value: inputValue },
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(inputValue);
    },
    []
  );

  return (
    <Grid container sx={{ minHeight: 500 }}>
      <Grid item xs={12}>
        <Paper
          sx={{
            position: 'sticky',
            top: 10,
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            marginBottom: 2,
            width: '100%',
          }}
        >
          <IconButton
            sx={{
              padding: 1.5,
              fontSize: 22,
            }}
            aria-label="search"
          >
            <SearchIcon fontSize="inherit" />
          </IconButton>
          <InputBase
            autoFocus
            sx={{ marginLeft: 2, flex: 1, fontSize: 16 }}
            placeholder="Search icons…"
            inputProps={{ 'aria-label': 'search icons' }}
            onChange={handleChange}
          />
        </Paper>
        <Typography
          sx={{
            marginTop: 2,
            marginBottom: 2,
            fontSize: 16,
          }}
        >{`${icons.length} matching results`}</Typography>
        <IconsList icons={icons} />
      </Grid>
    </Grid>
  );
};
