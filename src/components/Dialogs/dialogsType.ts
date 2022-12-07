import { Store } from "redux"
import { RootState } from "../../redux/reduxStore"
import { DialogsPage, DispatchAction } from "../../redux/type"

export type DialogsPropsType = {
	state: DialogsPage
	onClick: () => void
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export type DialogsContainerPropsType = {
	store: Store<RootState, DispatchAction>
}
