import { createContext } from "react";

type defaultProps = {
  user: string | null;
  messages: { _id: string; from: string; roomID: string; msg: string }[] | [];
  room: { _id: string; roomName: string } | null;
  error: string | null;
  setUser: Function;
  getMessages: Function;
  postMessage: Function;
  addMessage: Function;
  getRoom: Function;
  createRoom: Function;
  setError: Function;
};

const defaultProps: defaultProps = {
  user: null,
  messages: [],
  room: null,
  error: null,
  setUser: () => {},
  getMessages: () => {},
  postMessage: () => {},
  addMessage: () => {},
  getRoom: () => {},
  createRoom: () => {},
  setError: () => {},
};

export const Context = createContext(defaultProps);
