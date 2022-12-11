import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './redux/reduxStore';



const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
const updateApp = () => {
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	);
}
updateApp();
store.subscribe(() => updateApp())