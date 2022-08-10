import Error from 'components/Error';
import MessageDiv from 'components/MessageDiv';
import { createClient } from 'graphql-ws';
import { memo, useContext, useEffect, useRef } from 'react';
import { Context } from 'state/context';
import { StyledMsgContainer } from './styled-messageContainer';

const MessageContainer = () => {
	const { messages, user, addMessage, setError, room, error } =
		useContext(Context);
	const dummyDiv = useRef<any>();
	const client = createClient({
		url: import.meta.env.VITE_GRAPHQL_WS_ENDPOINT as string,
	});
	useEffect(() => {
		const result = new Promise((resolve, reject) => {
			client.subscribe(
				{
					query: `subscription SubscribeMessage{
  					subscribeMessage(roomID: "${room?._id}") {
    					_id
						from
						msg
						roomID
  					}
				}`,
				},
				{
					next: (data: {
						data: {
							subscribeMessage: {
								_id: string;
								from: string;
								msg: string;
								roomID: string;
							};
						};
					}) => {
						addMessage(data.data.subscribeMessage);
					},
					error: reject,
					complete: () => {
						resolve(result);
					},
				},
			);
		});
		result.catch((error) => {
			setError("Couldn't connect to server");
		});
	}, []);
	useEffect(() => {
		dummyDiv.current.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);
	return (
		<StyledMsgContainer>
			{messages.map((message) => (
				<MessageDiv data={message} key={message._id} user={user!} />
			))}
			<div ref={dummyDiv} />
		</StyledMsgContainer>
	);
};
export default memo(MessageContainer);
