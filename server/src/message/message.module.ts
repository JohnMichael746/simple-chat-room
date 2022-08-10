import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from 'src/db/message.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'messages',
        schema: MessageSchema,
      },
    ]),
  ],
  providers: [MessageService, MessageResolver],
})
export class MessageModule {}
