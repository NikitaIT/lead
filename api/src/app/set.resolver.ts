import {
  Args,
  Context,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';

import { PubSub } from 'graphql-subscriptions';
import { Set } from './graphql';

export type SetEntity = Set;

@Resolver('Set')
export class SetResolver {
  private sets: SetEntity[] = [
    {
      id: 1,
      name: 'Voltron',
      numParts: 2300,
      year: '2019',
    },
    {
      id: 2,
      name: 'Ship in a Bottle',
      numParts: 900,
      year: '2019',
    },
  ];

  @Query('allSets')
  getAllSets(): SetEntity[] {
    return this.sets;
  }

  @Mutation()
  addSet(
    @Args('name') name: string,
    @Args('year') year: string,
    @Args('numParts') numParts: number
  ) {
    const newSet = {
      id: this.sets.length + 1,
      name,
      year,
      numParts: +numParts,
    };

    this.sets.push(newSet);

    return newSet;
  }

  @Mutation()
  async addComment(
    @Args('postId', { type: () => Int }) postId: number,
    @Args('comment', { type: () => String }) comment: string,
    @Context('pubsub') pubSub: PubSub
  ): Promise<{ postId: number; comment: string }> {
    const newComment = { postId, comment };
    // const newComment = this.commentsService.addComment({ id: postId, comment });
    const msg = {
      topic: 'commentAdded',
      payload: {
        commentAdded: newComment,
      },
    };

    await pubSub.publish(msg.topic, msg.payload);

    return newComment;
  }
  @Subscription('commentAdded', {
    filter: (payload, variables) =>
      payload.commentAdded.postId === variables.postId,
  })
  commentAdded(
    @Args('postId') postId: string,
    @Context('pubsub') pubSub: PubSub
  ) {
    return pubSub.asyncIterator('commentAdded');
  }
}
