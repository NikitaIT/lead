import { ApolloClient, ApolloProvider } from '@apollo/client';
import { useState, useEffect } from 'react';
import { initApollo } from './initApollo';

export const InitializeApolloProvider: React.FC<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  const [client, setClient] = useState<ApolloClient<unknown>>();
  useEffect(() => {
    const client = initApollo();
    setClient(client.getOrCreate());
    client.initialize();
    // todo: await client.clearStore(); on exit
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{client && <ApolloProvider client={client}>{children}</ApolloProvider>}</>
  );
};
