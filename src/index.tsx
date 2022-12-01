import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { store } from './redux/state';
import { State } from './redux/type';



const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const updateApp = (state: State) => {
	root.render(
		<React.StrictMode>
			<App
				state={state}
				dispatch={store.dispatch.bind(store)}




			/>
		</React.StrictMode>
	);
}
updateApp(store.getState());
store.subscriber(updateApp);