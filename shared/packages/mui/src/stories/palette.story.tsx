import {
  styled,
  Box,
  Grid,
  Typography,
  useTheme,
  Alert,
  Link,
} from '@mui/material';
import { rgbToHex } from '@mui/material/styles';
import type { TypeBackground } from '@mui/material/styles/createPalette';

import theme from '../theme';

const colorTypes = ['light', 'main', 'dark', 'contrastText'] as const;

const backgroundColorValues = [50, 100, 200, 300, 400] as const;

const groups = {
  primary: colorTypes,
  secondary: colorTypes,
  error: colorTypes,
  success: colorTypes,
  offer: colorTypes,
  info: colorTypes,
  default: colorTypes,
  warning: colorTypes,
};

type ShadesType =
  | 'blue'
  | 'blueGrey'
  | 'brown'
  | 'green'
  | 'pink'
  | 'purple'
  | 'red'
  | 'yellow';

const shadesGroup: Record<ShadesType, typeof backgroundColorValues> = {
  blue: backgroundColorValues,
  blueGrey: backgroundColorValues,
  brown: backgroundColorValues,
  green: backgroundColorValues,
  pink: backgroundColorValues,
  purple: backgroundColorValues,
  red: backgroundColorValues,
  yellow: backgroundColorValues,
};

const ItemRoot = styled('div')`
  width: 250px;
  height: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 15px;
`;

const Item = (props: {
  color: string;
  name: string;
  overrideColor?: string;
}) => {
  const internalTheme = useTheme();
  const { color, name } = props;

  if (name.includes('Channel')) {
    return null;
  }

  const { overrideColor = internalTheme.palette.getContrastText(color) } =
    props;

  return (
    <Grid item>
      <ItemRoot
        sx={{
          backgroundColor: color,
          border: `1px solid ${internalTheme.palette.divider}`,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: overrideColor,
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: overrideColor,
          }}
        >
          {rgbToHex(color)}
        </Typography>
      </ItemRoot>
    </Grid>
  );
};

export const Palette = function Palette() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'background.default',
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
      }}
    >
      {Object.keys(groups).map((groupKey) => (
        <span key={groupKey}>
          <Typography gutterBottom mt={5} variant="h5">
            {groupKey}
          </Typography>
          <Grid container direction="column">
            {groups[groupKey as unknown as keyof typeof groups].map(
              (colorType) => (
                <Item
                  key={`palette.${groupKey}.${colorType}`}
                  color={
                    theme.palette[groupKey as unknown as keyof typeof groups][
                      colorType
                    ]
                  }
                  name={`palette.${groupKey}.${colorType}`}
                />
              )
            )}
          </Grid>
        </span>
      ))}
    </Box>
  );
};

export const Shades = function Shades() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'background.default',
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
      }}
    >
      {Object.keys(shadesGroup).map((groupKey) => (
        <span key={groupKey}>
          <Typography gutterBottom mt={3} variant="h5">
            {groupKey}
          </Typography>
          <Grid container direction="column">
            {shadesGroup[groupKey as unknown as ShadesType].map((colorType) => (
              <Item
                key={`palette.${groupKey}.${colorType}`}
                color={
                  theme.palette[groupKey as unknown as ShadesType][colorType]
                }
                name={`palette.${groupKey}[${colorType}]`}
              />
            ))}
          </Grid>
        </span>
      ))}
      ...
    </Box>
  );
};

export const ExtraColor = function ExtraColor() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'background.default',
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        flexFlow: 'flex-start',
        flexWrap: 'wrap',
        gap: 4,
      }}
    >
      <span>
        <Typography gutterBottom mt={5}>
          Gray colors
        </Typography>
        <Grid container direction="column">
          {Object.keys(theme.palette.grey).map((current) => (
            <Item
              key={`palette.grey[${current}]`}
              color={
                theme.palette.grey[current as keyof typeof theme.palette.grey]!
              }
              name={`palette.grey[${current}]`}
            />
          ))}
        </Grid>
      </span>
      <span>
        <Typography gutterBottom mt={5}>
          Buttons
        </Typography>
        <Grid container direction="column">
          <Item
            color={theme.palette.action.active}
            name="palette.action.active"
            overrideColor="#000"
          />
          <Item
            color={theme.palette.action.hover}
            name="palette.action.hover"
            overrideColor="#000"
          />
          <Item
            color={theme.palette.action.selected}
            name="palette.action.selected"
            overrideColor="#000"
          />
          <Item
            color={theme.palette.action.disabled}
            name="palette.action.disabled"
            overrideColor="#000"
          />
          <Item
            color={theme.palette.action.disabledBackground}
            name="palette.action.disabledBackground"
            overrideColor="#000"
          />
        </Grid>
      </span>
      <span>
        <Typography gutterBottom mt={5}>
          Typography
        </Typography>
        <Grid container direction="column">
          {Object.keys(theme.palette.text).map((current) => (
            <Item
              key={`palette.text.${current}`}
              color={
                theme.palette.text[current as keyof typeof theme.palette.text]
              }
              name={`palette.text.${current}`}
            />
          ))}
        </Grid>
      </span>
      <span>
        <Typography gutterBottom mt={5}>
          Divider
        </Typography>
        <Grid container direction="column">
          <Item color={theme.palette.divider} name="palette.divider" />
        </Grid>
        <Typography gutterBottom mt={5}>
          Common
        </Typography>
        <Grid container direction="column">
          <Item
            color={theme.palette.common.black}
            name="palette.common.black"
          />
          <Item
            color={theme.palette.common.white}
            name="palette.common.white"
          />
        </Grid>
      </span>
    </Box>
  );
};

export const Backgrounds = function Backgrounds() {
  const specialItem = (color: string, name: string) => (
    <Grid key={name} item>
      <ItemRoot
        sx={{
          backgroundColor:
            theme.palette.background[name as unknown as keyof TypeBackground],
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.getContrastText(color),
          }}
        >
          {name}{' '}
          {name !== 'default' && name !== 'paper' && (
            <Typography
              sx={{
                fontWeight: 'bold',
                color: '#ff0000',
                textShadow: '0px 2px 2px rgba(255, 255, 255, .18)',
              }}
              component="span"
            >
              @Deprecated
            </Typography>
          )}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: theme.palette.getContrastText(color),
          }}
        >
          {rgbToHex(color)}
        </Typography>
      </ItemRoot>
    </Grid>
  );

  const { background } = theme.palette;
  const backgrounds = Object.keys(background).filter(
    (name) => name !== 'defaultChannel'
  );

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'background.default',
        padding: 2,
      }}
    >
      <Alert severity="error">
        This page is obsolete and will be removed in next version{' '}
        <pre style={{ display: 'inline' }}>@lead/shared/packages/mui@3</pre>.
        Please use{' '}
        <Link href="/?path=/story/material-ui-theme--shades">Shades</Link>{' '}
        instead.
      </Alert>
      <Typography gutterBottom mt={5}>
        Backgrounds
      </Typography>
      <Grid container spacing={2}>
        {backgrounds.map((name) =>
          specialItem(background[name as keyof typeof background], name)
        )}
      </Grid>
    </Box>
  );
};

export const Actions = function Actions() {
  const specialItem = (color: number | string, name: string) => {
    const colorValue =
      typeof color === 'string' ? color : `rgba(0,0,0,${color})`;

    return (
      <Grid key={name} item>
        <ItemRoot
          sx={{
            backgroundColor: colorValue,
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#000',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: '#000',
            }}
          >
            {typeof color === 'number' && `Opacity: ${color * 100}%`}
            {typeof color === 'string' && color}
          </Typography>
        </ItemRoot>
      </Grid>
    );
  };
  const { action } = theme.palette;

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'background.default',
        padding: 2,
      }}
    >
      <Typography gutterBottom mt={5}>
        Backgrounds
      </Typography>
      <Grid container spacing={2}>
        {Object.keys(action).map((name) =>
          specialItem(action[name as keyof typeof action], name)
        )}
      </Grid>
    </Box>
  );
};
