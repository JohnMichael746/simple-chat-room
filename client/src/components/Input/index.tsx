import React, { useContext, useState } from 'react';
import {
	StyledForm,
	StyledInput,
	StyledInputButton,
	StyledInputDiv,
} from './styled-input';
import SendSvg from 'assets/send.svg';
import { Context } from 'state/context';

const InputDiv = () => {
	const [input, setInput] = useState('');
	const { postMessage, room, user } = useContext(Context);
	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInput(e.target.value);
	};
	const onSubmit = (
		e: React.FormEvent<HTMLButtonElement | HTMLFormElement>,
	) => {
		e.preventDefault();
		postMessage(user, room?._id, input);
		setInput('');
	};
	return (
		<StyledInputDiv>
			<StyledForm onSubmit={onSubmit}>
				<StyledInput
					placeholder='Enter your message'
					value={input}
					onChange={onChange}
				/>
			</StyledForm>
			<StyledInputButton onClick={onSubmit}>
				<img src={SendSvg} alt='' />
			</StyledInputButton>
		</StyledInputDiv>
	);
};
export default InputDiv;
