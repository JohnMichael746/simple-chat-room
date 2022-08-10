import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomDocument = Document & Room;

@Schema({ timestamps: true })
export class Room {
  @Prop()
  _id: string;

  @Prop({ required: true, unique: true })
  roomName: string;

  @Prop({ required: true, default: new Date(), expires: '1h' })
  expiresAt: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
