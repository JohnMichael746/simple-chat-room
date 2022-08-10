import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Document & Message;

@Schema({ timestamps: true })
export class Message {
  @Prop({})
  _id: string;

  @Prop({ required: true, ref: 'rooms' })
  roomID: string;

  @Prop({ required: true, trim: true })
  from: string;

  @Prop({ required: true, trim: true })
  msg: string;

  @Prop({ required: true, default: new Date(), expires: '1h' })
  expiresAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
