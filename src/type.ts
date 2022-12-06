import { RootState } from "./redux/reduxStore"
import { DispatchAction } from "./redux/type"

export type AppProps = {
	state: RootState
	dispatch: (action: DispatchAction) => void
}