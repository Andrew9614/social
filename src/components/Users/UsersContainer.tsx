import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reduxStore';
import { Users } from './Users';
import {
  usersPageUnmount,
  requestUsers,
  changeFollowStatus,
} from '../../redux/usersPageReducer';
import { UsersDispatchType, UsersStateType } from './types';
import {
  getEmptyResponse,
  getLoadingButtons,
  getUsersSelector,
} from '../../redux/usersPageSelector';

type UsersContainerDispatchType = {
  requestUsers: () => void;
  usersPageUnmount: () => void;
};
// Z A L U P A
type UserAPIContainerPropsType = UsersStateType &
  UsersDispatchType &
  UsersContainerDispatchType;
// Z A L U P A

export class UsersAPIContainer extends React.Component<UserAPIContainerPropsType> {
  componentDidMount(): void {
    this.props.requestUsers();
  }

  componentWillUnmount(): void {
    this.props.usersPageUnmount();
  }

  render() {
    return (
      <Users
        users={this.props.users}
        hasMore={!this.props.hasMore}
        requestUsers={this.props.requestUsers}
        changeFollowStatus={this.props.changeFollowStatus}
        loadingButtons={this.props.loadingButtons}
      />
    );
  }
}

const mapState = (state: RootState): UsersStateType => ({
  hasMore: getEmptyResponse(state),
  loadingButtons: getLoadingButtons(state),
  users: getUsersSelector(state),
});

const mapDispatch = {
  usersPageUnmount,
};

export const UsersContainer = connect(mapState, {
  ...mapDispatch,
  requestUsers,
  changeFollowStatus,
})(UsersAPIContainer);
