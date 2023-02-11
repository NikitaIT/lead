import { alpha } from '@mui/system';

import { colors } from '../constants';
import type { ComponentsOverrides } from '../types';

type Component = ComponentsOverrides<'MuiDataGrid'>;

// taken from original mui styles
const SELECTED_OPACITY = 0.08;
const HOVER_OPACITY = 0.04;

const styleOverrides: Component['styleOverrides'] = {
  root: {
    border: 0,
    color: colors.text.primary,
    // Scrollbar
    '@media (hover: hover) and (pointer: fine)': {
      '&, & *': {
        msOverflowStyle: '-ms-autohiding-scrollbar',
        scrollbarWidth: 'thin',
        scrollbarColor: `${colors.oriGrey[300]} transparent`,
      },
      '::-webkit-scrollbar, & *::-webkit-scrollbar': {
        width: 10,
        height: 10,
      },
      '::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
        background: colors.oriGrey[300],
        borderRadius: 6,
        border: '2px solid transparent',
        backgroundClip: 'content-box',
      },
    },
  },
  columnHeaders: {
    zIndex: 2,
    fontSize: 12,
    background: colors.oriGrey[50],
    borderBottom: `1px solid ${colors.oriGrey[300]}`,
    boxShadow: '0px 1px 3px 0px rgba(51,51,51,0.2)',
  },
  pinnedColumnHeaders: {
    background: colors.oriGrey[50],
    '&.MuiDataGrid-pinnedColumnHeaders--left': {
      borderRight: `1px solid ${colors.oriGrey[300]}`,
      boxShadow: '1px 0px 3px 0px rgba(51,51,51,0.2)',
    },
    '&.MuiDataGrid-pinnedColumnHeaders--right': {
      borderLeft: `1px solid ${colors.oriGrey[300]}`,
      boxShadow: '-1px 0px 3px 0px rgba(51,51,51,0.2)',
    },
  },
  pinnedColumns: {
    '&.MuiDataGrid-pinnedColumns--left': {
      borderRight: `1px solid ${colors.oriGrey[300]}`,
      boxShadow: '1px 0px 3px 0px rgba(51,51,51,0.2)',
    },
    '&.MuiDataGrid-pinnedColumns--right': {
      borderLeft: `1px solid ${colors.oriGrey[300]}`,
      boxShadow: '-1px 0px 3px 0px rgba(51,51,51,0.2)',
    },
  },
  row: {
    // stripe rows
    '&.odd': {
      backgroundColor: colors.oriGrey[50],
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(colors.commonColors.black, HOVER_OPACITY),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&.Mui-selected': {
        backgroundColor: alpha(colors.primary.main, SELECTED_OPACITY),
        '&:hover, &.Mui-hovered': {
          backgroundColor: alpha(colors.primary.main, SELECTED_OPACITY + HOVER_OPACITY),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: alpha(colors.primary.main, SELECTED_OPACITY),
          },
        },
      },
    },
  },
  cell: {
    // compare data
    '& .compareData': {
      flexGrow: 1,
    },
    '& .compareData .secondary': {
      fontSize: 12,
      color: colors.oriGrey.A400,
    },
    '& .compareData .negative': {
      color: colors.error.dark,
    },
    '& .compareData .positive': {
      color: colors.success.dark,
    },
    '&.MuiDataGrid-cell--textRight .compareData *': {
      justifyContent: 'flex-end',
      textAlign: 'end',
    },
    '&.MuiDataGrid-cell--textCenter .compareData *': {
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
  footerContainer: {
    borderTop: `1px solid ${colors.oriGrey[300]}`,
    fontSize: 12,
    color: colors.oriGrey.A400,
    justifyContent: 'center',
  },
};

const defaultProps: Component['defaultProps'] = {
  hideFooterSelectedRowCount: true,
};

export default {
  styleOverrides,
  defaultProps,
};
