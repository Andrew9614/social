import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { store } from './redux/state';



const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const updateApp = (state: State) => {
	root.render(
		<React.StrictMode>
			<App
				state={state}
				handleChangeMyPostsTextArea={store.changeMyPostsTextArea.bind(store)}
				handleClickMyPostsButton={store.addPosts.bind(store)}
				handleChangeMessagesTextArea={store.changeMessageTextArea.bind(store)}
				handleClickMessageButton={store.addMessage.bind(store)}
			/>
		</React.StrictMode>
	);
}
updateApp(store.getState());
store.subscriber(updateApp);