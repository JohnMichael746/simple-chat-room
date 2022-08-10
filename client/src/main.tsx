import ReactDOM from 'react-dom';
import App from './App';
import 'scss/index.scss';
import { State } from './state';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<State>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</State>,
	document.getElementById('root'),
);
