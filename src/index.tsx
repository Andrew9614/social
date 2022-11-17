import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { addMessage, addPosts, changeMessageTextArea, changeMyPostsTextArea, subscriber, state } from './redux/state';



const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const updateApp = (state:State) => {
	root.render(
		<React.StrictMode>
			<App
				state={state}
				handleChangeMyPostsTextArea={changeMyPostsTextArea}
				handleClickMyPostsButton={addPosts}
				handleChangeMessagesTextArea={changeMessageTextArea}
				handleClickMessageButton={addMessage}
			/>
		</React.StrictMode>
	);
}
updateApp(state);

subscriber(updateApp);