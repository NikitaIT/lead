import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import App from './app/app';
import initApollo from './initApollo';

const client = initApollo({});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log('ibndsfsadfasdf');
root.render(
  <ApolloProvider client={client}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ApolloProvider>
);
