import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class MessageArgs {
  @Field()
  from: string;

  @Field()
  roomID: string;

  @Field()
  msg: string;
}
