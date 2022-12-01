import { DispatchAction, State } from "./redux/type"

export type AppProps = {
	state: State
	dispatch: (action: DispatchAction) => void
}