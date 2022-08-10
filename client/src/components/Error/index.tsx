import { useContext } from 'react';
import { Context } from 'state/context';
import { StyledErrorDiv } from './styled-error';

const Error = () => {
	const { error } = useContext(Context);
	return <StyledErrorDiv>{error}</StyledErrorDiv>;
};

export default Error;
