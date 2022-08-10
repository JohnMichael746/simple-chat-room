import { useContext } from 'react';
import { Context } from 'state/context';
import { StyledNavBar, StyledNavTitle } from './styled-nav';

const NavBar = () => {
	const { room } = useContext(Context);
	return (
		<StyledNavBar>
			<StyledNavTitle>{room?.roomName}</StyledNavTitle>
		</StyledNavBar>
	);
};
export default NavBar;
