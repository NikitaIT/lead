import { SubscriptionConfig } from '@nestjs/graphql';

export function generatePubSub(): SubscriptionConfig {
  return {
    'graphql-ws': {
      // path: '/subscriptions',
    },
    'subscriptions-transport-ws': true,
  };
}
