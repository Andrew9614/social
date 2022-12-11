import { connect } from "react-redux";
import { RootState } from "../../../redux/reduxStore";
import { FriendsListMini, FriendsListMiniStateType } from "./FriendsListMini";

const mapStateToProps = (state: RootState): FriendsListMiniStateType => {
	return {
		state: state.sidebarPage.friendsListMini
	}
}

export const FriendsListMiniContainer = connect(mapStateToProps)(FriendsListMini);