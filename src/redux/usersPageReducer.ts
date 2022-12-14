import { DispatchAction, UsersDataType } from './type';

const FOLLOW_CHANGE: DispatchAction['type'] = 'FOLLOW_CHANGE';
const SET_USERS: DispatchAction['type'] = 'SET_USERS';
const LOADING_STATUS: DispatchAction['type'] = 'LOADING_STATUS';

const initialState: UsersDataType = {
  users: [],
	loading: true
};

export const usersPageReducer = (
  state: UsersDataType = initialState,
  action: DispatchAction
): UsersDataType => {
  switch (action.type) {
    case FOLLOW_CHANGE:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id !== action.id
            ? user
            : {
                ...user,
                followed: !user.followed,
              };
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users ? action.users : state.users,
      };
			case LOADING_STATUS:
				return{
					...state,
					loading: action.status || false
				}
    default:
      return state;
  }
};
