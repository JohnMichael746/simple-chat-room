import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomResolver } from './room.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from 'src/db/room.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'rooms',
        schema: RoomSchema,
      },
    ]),
  ],
  providers: [RoomService, RoomResolver],
})
export class RoomModule {}
