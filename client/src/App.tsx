import { Route, Routes } from 'react-router-dom';
import Chat from 'pages/chat';
import Auth from 'pages/auth';
import ProtectedRoute from 'helper/protectedRoute';
function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<Chat />
						</ProtectedRoute>
					}
				/>
				<Route path='/auth' element={<Auth />} />
			</Routes>
		</>
	);
}

export default App;
