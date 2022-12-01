import { DialogsPage, DispatchAction } from "../../redux/type"

export type DialogsProps = {
	state: DialogsPage
	dispatch: (action: DispatchAction) => void
}
