import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux/reduxStore";
import { Users, UsersDispatchType, UsersStateType } from "./Users";

const mapState = (state: RootState): UsersStateType => {
	return {
		state: state.usersPage
	}
}

const mapDispatch = (dispatch: AppDispatch): UsersDispatchType => {
	return {
		followOnClick: (id) => dispatch({ type: 'FOLLOW_CHANGE', id: id }),
		setUsers: (users) => dispatch({ type: 'SET_USERS', users: users })
	}
}

export const UsersContainer = connect(mapState, mapDispatch)(Users)