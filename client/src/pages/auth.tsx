import React, { useContext, useState } from 'react';
import { Context } from 'state/context';
import { Navigate } from 'react-router-dom';
import AuthLogo from 'assets/Auth-Logo.png';
import Error from 'components/Error';

const Auth = () => {
	const [roomName, setRoom] = useState('');
	const [userName, setUserName] = useState('');
	const { createRoom, getRoom, room, error, setUser } = useContext(Context);
	const onChangeRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRoom(e.target.value);
	};
	const onChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value);
	};
	const onSubmitGetRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		getRoom(roomName.trim());
		setUser(userName.trim());
	};
	const onSubmitCreateRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		createRoom(roomName.trim());
		setUser(userName.trim());
	};
	if (room) {
		return <Navigate to='/' />;
	}
	return (
		<div className='auth-page-container'>
			{error && <Error />}
			<div className='logo'>
				<img src={AuthLogo} alt='' />
			</div>
			<div className='form'>
				<div className='hero'>Chat for Fun</div>
				<div className='forms'>
					<input
						type='text'
						placeholder='User-Name'
						name='userName'
						onChange={onChangeUser}
					/>
					<input
						type='text'
						placeholder='Room Name'
						name='roomName'
						onChange={onChangeRoom}
					/>
					<div className='btn'>
						<button onClick={onSubmitGetRoom}>Join Room</button>
						<button onClick={onSubmitCreateRoom}>Create Room</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;
