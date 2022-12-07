import { Store } from "redux"
import { RootState } from "./redux/reduxStore"
import { DispatchAction } from "./redux/type"

export type AppPropsType = {
	store: Store<RootState, DispatchAction>
}