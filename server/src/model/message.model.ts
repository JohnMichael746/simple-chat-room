import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'This is model for message schema' })
export class MessageModel {
  @Field(() => ID)
  _id: string;

  @Field()
  from: string;

  @Field()
  roomID: string;

  @Field()
  msg: string;
}
