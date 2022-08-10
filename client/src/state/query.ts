import { gql } from "graphql-request";
export const GetMessages = gql`
  query GetMessages($roomID: String!) {
    getMessages(roomID: $roomID) {
      _id
      from
      msg
      roomID
    }
  }
`;

export const GetRoom = gql`
  query GetRoom($roomName: String!) {
    getRoom(roomName: $roomName) {
      _id
      roomName
    }
  }
`;

export const AddMessage = gql`
  mutation AddMessage($from: String!, $msg: String!, $roomID: String!) {
    addMessage(from: $from, msg: $msg, roomID: $roomID) {
      _id
    }
  }
`;

export const CreateRoom = gql`
  mutation CreateRoom($roomName: String!) {
    createRoom(roomName: $roomName) {
      _id
      roomName
    }
  }
`;
