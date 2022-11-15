export let state: State = {
	dialogsPage: {
		dialogsData: [
			{ id: 0, name: 'Masha', imgLink: 'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25' },
			{ id: 1, name: 'Sasha', imgLink: 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg' },
			{ id: 2, name: 'Dasha', imgLink: 'https://imageio.forbes.com/specials-images/imageserve/611bde75926cb502bae8e75b/0x0.jpg?format=jpg&width=1200' },
			{ id: 3, name: 'Evgeniy', imgLink: '' },
			{ id: 4, name: 'Obema', imgLink: '' }
		],
		messagesData: [
			{ id: 0, message: 'Hello', self: true},
			{ id: 1, message: 'How are you', self: true },
			{ id: 2, message: 'I\'m gay', self: false },
		]
	},
	profilePage: {
		postsData: [
			{ message: 'Hello', likes: 5 },
			{ message: 'fgs', likes: 48 },
			{ message: 'dsav', likes: 458 },
			{ message: 'faggot', likes: 1488 },
		]
	},
	sidebarPage: {
		friendsListMini: [
			{ id: 0, name: 'Masha', link: 'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25' },
			{ id: 1, name: 'Sasha', link: 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg' },
			{ id: 2, name: 'Dasha', link: 'https://imageio.forbes.com/specials-images/imageserve/611bde75926cb502bae8e75b/0x0.jpg?format=jpg&width=1200' }
		]
	}
}