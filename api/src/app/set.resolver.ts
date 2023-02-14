import { Inject } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';

import { PubSub } from 'graphql-subscriptions';
import { Set } from './graphql';
import { PUB_SUB } from './PubSub.module';

export type SetEntity = Set;

@Resolver('Set')
export class SetResolver {
  constructor(@Inject(PUB_SUB) private pubSub: PubSub) {}
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

  @Mutation('addSet')
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

  @Mutation('addComment')
  async addComment(
    @Args('postId', { type: () => Int }) postId: number,
    @Args('comment', { type: () => String }) comment: string
  ): Promise<{ postId: number; comment: string }> {
    const newComment = { postId, comment };
    // const newComment = this.commentsService.addComment({ id: postId, comment });
    const msg = {
      topic: 'commentAdded',
      payload: {
        commentAdded: newComment,
      },
    };

    await this.pubSub.publish(msg.topic, msg.payload);

    return newComment;
  }
  @Subscription('commentAdded', {
    filter: (payload, variables) =>
      payload.commentAdded.postId === variables.postId,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  commentAdded(@Args('postId') postId: number) {
    return this.pubSub.asyncIterator('commentAdded');
  }
}
