import Error from 'components/Error';
import InputDiv from 'components/Input';
import MessageContainer from 'components/MessageContainer';
import NavBar from 'components/NavBar';
import { memo, useContext, useEffect } from 'react';
import { Context } from 'state/context';

const Chat = () => {
	const { error, getMessages, room } = useContext(Context);
	useEffect(() => {
		getMessages(room?._id);
	}, []);
	return (
		<>
			{error && <Error />}
			<NavBar />
			<div className='chat-box'>
				<MessageContainer />
				<InputDiv />
			</div>
		</>
	);
};

export default Chat;
