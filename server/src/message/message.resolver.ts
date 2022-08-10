import { Args, Resolver, Mutation, Query, Subscription } from '@nestjs/graphql';
import { MessageArgs } from 'src/dto/message.args';
import { MessageModel } from 'src/model/message.model';
import { MessageService } from './message.service';
import { PubSub } from 'graphql-subscriptions';

@Resolver(() => MessageModel)
export class MessageResolver {
  constructor(private readonly MessageServiceProvider: MessageService) {}

  pubsub = new PubSub();

  @Query(() => [MessageModel], { nullable: 'items' })
  async getMessages(@Args('roomID') roomID: string) {
    const data = await this.MessageServiceProvider.getMessages(roomID);
    return data;
  }

  @Mutation(() => MessageModel)
  async addMessage(@Args() inputData: MessageArgs) {
    const data = await this.MessageServiceProvider.addMessage(
      inputData.from,
      inputData.roomID,
      inputData.msg,
    );
    this.pubsub.publish('subscribeMessage', { subscribeMessage: data });
    return data;
  }

  @Subscription(() => MessageModel, {
    filter: (payload, variables) => {
      return payload.subscribeMessage.roomID === variables.roomID;
    },
  })
  subscribeMessage(@Args('roomID') roomID: string) {
    return this.pubsub.asyncIterator('subscribeMessage');
  }
}
