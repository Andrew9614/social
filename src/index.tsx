import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { StoreContext } from './contex';
import { RootState, store } from './redux/reduxStore';



const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
const updateApp = (state: RootState) => {
	root.render(
		<React.StrictMode>
			<StoreContext.Provider value={store.getState()}>
				<App
					store={store}
				/>
			</StoreContext.Provider>
		</React.StrictMode>
	);
}
updateApp(store.getState());
store.subscribe(() => updateApp(store.getState()))