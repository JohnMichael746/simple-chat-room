import { v1 } from 'uuid';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from 'src/db/message.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel('messages') private readonly Message: Model<MessageDocument>,
  ) {}

  async getMessages(roomID: string): Promise<Message[]> {
    try {
      const data = await this.Message.find({ roomID })
        .sort({ createdAt: 1 })
        .lean();
      return data;
    } catch (error) {
      throw new InternalServerErrorException('Server Error');
    }
  }
  async addMessage(
    from: string,
    roomID: string,
    msg: string,
  ): Promise<Message> {
    try {
      const newMessage = new this.Message({
        _id: v1(),
        from: from.trimEnd(),
        roomID,
        msg: msg.trim(),
      });
      await newMessage.save();
      return newMessage;
    } catch (error) {
      throw new InternalServerErrorException('Server Error');
    }
  }
}
