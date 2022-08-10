import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'This is model for room schema' })
export class RoomModel {
  @Field(() => ID)
  _id: string;

  @Field()
  roomName: string;
}
