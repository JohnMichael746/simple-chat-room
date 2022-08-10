import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from 'state/context';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const { user, room } = useContext(Context);
	if (!user || !room) {
		return <Navigate to='/auth' />;
	}
	return children;
};
export default ProtectedRoute;
