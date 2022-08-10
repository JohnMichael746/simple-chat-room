import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoomModel } from 'src/model/room.model';
import { RoomService } from './room.service';

@Resolver(() => RoomModel)
export class RoomResolver {
  constructor(private readonly RoomServiceProvider: RoomService) {}

  @Query(() => RoomModel)
  async getRoom(@Args('roomName') roomName: string) {
    const data = await this.RoomServiceProvider.getRoom(roomName);
    if (!data) {
      throw new NotFoundException('Room not found');
    }
    return data;
  }

  @Mutation(() => RoomModel)
  async createRoom(@Args('roomName') roomName: string) {
    const data = await this.RoomServiceProvider.createRoom(roomName);
    return data;
  }
}
