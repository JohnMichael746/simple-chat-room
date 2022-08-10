import { MongooseModule } from '@nestjs/mongoose';
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
}
import { Module } from '@nestjs/common';
import { RoomModule } from './room/room.module';
import { MessageModule } from './message/message.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      subscriptions: {
        'graphql-ws': {
          path: '/graphql',
        },
      },
      cors: {
        origin: process.env.ORIGIN,
      },
    }),
    MongooseModule.forRoot(process.env.MONGOOSE_URI),
    RoomModule,
    MessageModule,
  ],
})
export class AppModule {}
