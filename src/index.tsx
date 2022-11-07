import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// let dialogsData: DialogsData[] = [
// 	{ id: 0, name: 'Masha' },
// 	{ id: 1, name: 'Sasha' },
// 	{ id: 2, name: 'Dasha' },
// 	{ id: 3, name: 'Evgeniy' },
// 	{ id: 4, name: 'Obema' }
// ]

// let messagesData: { id: number, message: string }[] = [
// 	{ id: 0, message: 'Hello' },
// 	{ id: 1, message: 'How are you' },
// 	{ id: 2, message: 'Gay' },
// ]
let data: Data = {
	dialogsData: [
		{ id: 0, name: 'Masha' },
		{ id: 1, name: 'Sasha' },
		{ id: 2, name: 'Dasha' },
		{ id: 3, name: 'Evgeniy' },
		{ id: 4, name: 'Obema' }
	],
	messagesData: [
		{ id: 0, message: 'Hello' },
		{ id: 1, message: 'How are you' },
		{ id: 2, message: 'Gay' },
	],
	postsData: [
		{ message: 'Hello', likes: 5 },
		{ message: 'fgs', likes: 48 },
		{ message: 'dsav', likes: 458 },
		{ message: 'faggot', likes: 1488 },
	]
}
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App data={data} />
	</React.StrictMode>
);

