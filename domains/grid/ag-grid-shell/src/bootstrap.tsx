import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import { EditXHtml } from '@lead/html-lang';
import { MuiXHtml } from '@lead/mui-lang';
// eslint-disable-next-line react-hooks/rules-of-hooks
EditXHtml.usePartial(MuiXHtml);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
