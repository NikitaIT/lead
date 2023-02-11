import 'loki/configure-react';
import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from '@emotion/styled';
import {
  theme,
  ThemeProvider,
  LocalizationProvider,
  createTheme,
} from '../packages/mui/src';
import DateAdapter from '../packages/mui/src/DateAdapter';
import isLokiRunning from '@loki/is-loki-running';

/* #region painInTheAss */
/* STUFF WHICH BREAKS MATERIAL-UI */
import '@ori/kendo-ui-extensions/css/ori.nova.css';
import './default.css';
import '../packages/css-variables/variables.css';
/* END OF STUFF WHICH BREAKS MATERIAL-UI */
/* #endregion painInTheAss */

const Wrap = styled.div`
  padding: 24px;
`;

global.imgSrc =
  process.env.NODE_ENV !== 'production' && !isLokiRunning()
    ? 'https://lh3.googleusercontent.com/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc=w600'
    : 'https://clientapp-live-cdn.azureedge.net/email-assets/oriflame-sweden@2x.png';

global.isDocs = () => window.location.search.includes('docs');

window.parent.window.theme = theme;

console.log(
  `%c
 ██████╗ ██████╗ ██╗      ██╗   ██╗██╗
██╔═══██╗██╔══██╗██║      ██║   ██║██║
██║   ██║██████╔╝██║█████╗██║   ██║██║
██║   ██║██╔══██╗██║╚════╝██║   ██║██║
╚██████╔╝██║  ██║██║      ╚██████╔╝██║
╚═════╝ ╚═╝  ╚═╝╚═╝       ╚═════╝ ╚═╝
Tip: you can access the documentation \`theme\` object directly in the console.
`,
  'font-family:monospace;color:#1976d2;font-size:12px;'
);

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  controls: {
    hideNoControlsWarning: true,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Components',
        ['Introduction', 'Changelog'],
        'Mui',
        ['Introduction', 'Changelog'],
        'DataGrid',
        ['Introduction', 'Changelog'],
        'Icons',
        ['Introduction', 'Changelog', 'Overview'],
        'Fonts',
        ['Introduction', 'Changelog'],
        'Css variables',
        ['Introduction', 'Changelog'],
        'Overview',
        ['Mui'],
        'Teams',
        ['Introduction'],
        'Codemod',
        ['Introduction', 'Changelog'],
        'General',
        ['Changelog', 'Convention'],
      ],
    },
  },
};

const customTheme = createTheme({
  ...(isLokiRunning() && {
    transitions: {
      create: () => 'none',
    },
    components: {
      MuiModal: {
        defaultProps: {
          disablePortal: true,
        },
      },
      MuiLeadDialogBase: {
        defaultProps: {
          timeoutMs: 10000,
        },
      },
      MuiLeadFeedbackNotification: {
        defaultProps: {
          timeoutMs: 10000,
        },
      },
    },
  }),
});

const props = {
  ...(isLokiRunning() && {
    className: 'loki',
  }),
};

export const decorators = [
  (story) => (
    <ThemeProvider theme={customTheme}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Wrap {...props}> {story()} </Wrap>{' '}
      </LocalizationProvider>{' '}
    </ThemeProvider>
  ),
];
