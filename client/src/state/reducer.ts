import {
  GET_MESSAGES,
  ADD_ROOM,
  ADD_MESSAGE,
  SET_ERROR,
  SET_USER,
  REMOVE_ERROR,
} from "./type";

type action =
  | {
      type: "GET_MESSAGES";
      payload:
        | { _id: string; roomID: string; from: string; msg: string }[]
        | [];
    }
  | {
      type: "ADD_ROOM";
      payload: { _id: string; roomName: string };
    }
  | {
      type: "ADD_MESSAGE";
      payload: { _id: string; roomID: string; from: string; msg: string };
    }
  | {
      type: "SET_USER" | "SET_ERROR";
      payload: string;
    }
  | {
      type: "REMOVE_ERROR";
      payload: null;
    };

type state = {
  user: string | null;
  messages: { _id: string; from: string; roomID: string; msg: string }[] | [];
  room: { _id: string; roomName: string } | null;
  error: string | null;
};

const Reducer = (state: state, action: action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case ADD_ROOM:
      return {
        ...state,
        room: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default Reducer;
