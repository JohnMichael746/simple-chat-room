import { useReducer } from 'react';
import {
	GET_MESSAGES,
	ADD_ROOM,
	ADD_MESSAGE,
	SET_ERROR,
	SET_USER,
	REMOVE_ERROR,
} from './type';
import Reducer from './reducer';
import { gqlClient } from './gql-client';
import { AddMessage, CreateRoom, GetMessages, GetRoom } from './query';
import { Context } from './context';

type state = {
	user: string | null;
	messages: { _id: string; from: string; roomID: string; msg: string }[] | [];
	room: { _id: string; roomName: string } | null;
	error: string | null;
};

export const State = ({ children }: { children: JSX.Element }) => {
	const initialState: state = {
		user: '',
		messages: [],
		room: null,
		error: '',
	};
	const [state, dispatch] = useReducer(Reducer, initialState);

	const setUser = (user: string) => {
		dispatch({ type: SET_USER, payload: user });
	};

	const getMessages = async (roomID: string) => {
		try {
			const data = await gqlClient.request(GetMessages, { roomID });
			dispatch({ type: GET_MESSAGES, payload: data.getMessages });
		} catch (error: any) {
			setError(error.response.errors[0].message);
		}
	};
	const postMessage = async (from: string, roomID: string, msg: string) => {
		try {
			await gqlClient.request(AddMessage, { from, roomID, msg });
		} catch (error: any) {
			setError(error.response.errors[0].message);
		}
	};
	const addMessage = async (msg: {
		_id: string;
		from: string;
		roomID: string;
		msg: string;
	}) => {
		dispatch({ type: ADD_MESSAGE, payload: msg });
	};

	const getRoom = async (roomName: string) => {
		try {
			const data = await gqlClient.request(GetRoom, { roomName });
			dispatch({ type: ADD_ROOM, payload: data.getRoom });
		} catch (error: any) {
			setError(error.response.errors[0].message);
		}
	};

	const createRoom = async (roomName: string) => {
		try {
			const data = await gqlClient.request(CreateRoom, { roomName });
			dispatch({ type: ADD_ROOM, payload: data.createRoom });
		} catch (error: any) {
			setError(error.response.errors[0].message);
		}
	};

	const setError = (error: string) => {
		dispatch({ type: SET_ERROR, payload: error });
		setTimeout(() => {
			dispatch({ type: REMOVE_ERROR, payload: null });
		}, 2000);
	};

	return (
		<Context.Provider
			value={{
				user: state.user,
				messages: state.messages,
				room: state.room,
				error: state.error,
				setUser,
				getMessages,
				postMessage,
				addMessage,
				getRoom,
				createRoom,
				setError,
			}}>
			{children}
		</Context.Provider>
	);
};
