import { Operation } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

declare module '@apollo/client' {
  export interface DefaultContext {
    clientName?: string;
  }
}
export function requestedClientIs(
  clientName: string
): (operation: Operation) => boolean {
  return (operation) => {
    console.log(
      'expect ',
      operation.getContext().clientName,
      '=',
      clientName,
      ' : ',
      operation.getContext()
    );
    return operation.getContext().clientName === clientName;
  };
}

export function isWebsocket({ query }: Operation): boolean {
  const definition = getMainDefinition(query);
  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  );
}
