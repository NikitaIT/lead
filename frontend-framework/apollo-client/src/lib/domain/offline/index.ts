import { ApolloLink } from '@apollo/client';
import BaseQueueLink from 'apollo-link-queue';
import { BaseLink } from '../../framework';

export class QueueLink implements BaseLink {
  constructor(private offlineLink: BaseQueueLink = new BaseQueueLink()) {}
  get apolloLink(): ApolloLink {
    return this.offlineLink;
  }
  close = () => {
    this.offlineLink.close();
  };
  open = () => {
    this.offlineLink.open();
  };
  // Note: remove these listeners when your app is shut down to avoid leaking listeners.
  on() {
    window.addEventListener('offline', this.close);
    window.addEventListener('online', this.open);
  }

  off() {
    window.removeEventListener('offline', this.close);
    window.removeEventListener('online', this.open);
  }
}
