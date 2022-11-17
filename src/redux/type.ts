export type Store = {
	_state: State
	_callSubscriber: Function
	getState: Function
	
	
	
	
	subscriber: Function
	dispatch: (action: DispatchAction) => void
}
