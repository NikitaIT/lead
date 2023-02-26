import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { InitializeApolloProvider } from './apollo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <InitializeApolloProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </InitializeApolloProvider>
);
