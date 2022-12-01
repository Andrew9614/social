import { DispatchAction, ProfilePage } from "../../redux/type"

export type ProfileProps = {
	state: ProfilePage


	dispatch: (action: DispatchAction) => void
}