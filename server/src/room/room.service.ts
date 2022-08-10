import {
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room, RoomDocument } from 'src/db/room.schema';
import { v1 } from 'uuid';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel('rooms') private readonly Room: Model<RoomDocument>,
  ) {}

  async getRoom(roomName: string): Promise<Room | null> {
    try {
      const data = await this.Room.findOne({ roomName }).lean();
      return data;
    } catch (error) {
      throw new InternalServerErrorException('Server Error');
    }
  }
  async createRoom(roomName: string): Promise<Room> {
    try {
      const newRoom = new this.Room({
        _id: v1(),
        roomName,
      });
      await newRoom.save();
      return newRoom;
    } catch (error) {
      if (error.name === 'MongoError' && error.code === 11000) {
        throw new NotAcceptableException('RoomName already taken');
      }
      throw new InternalServerErrorException('Server Error');
    }
  }
}
