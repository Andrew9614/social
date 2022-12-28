import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reduxStore';
import { Users } from './Users';
import {
  onFollowChange,
  usersPageUnmount,
  toggleFollowButtonLoading,
  requestUsers,
} from '../../redux/usersPageReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { UsersDispatchType, UsersStateType } from './types';
import {
  getEmptyResponse,
  getLoadingButtons,
  getUsers,
} from '../../redux/userPageSelector';

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
        followOnClick={this.props.followOnClick}
        hasMore={!this.props.hasMore}
        requestMoreUsers={this.props.requestUsers}
        isButtonLoading={this.props.isButtonLoading}
        loadingButtons={this.props.loadingButtons}
      />
    );
  }
}

const mapState = (state: RootState): UsersStateType => ({
  hasMore: getEmptyResponse(state),
  loadingButtons: getLoadingButtons(state),
  users: getUsers(state),
});

const mapDispatch = {
  onFollowChange,
  usersPageUnmount,
  toggleFollowButtonLoading,
};

export const UsersContainer = connect(mapState, {
  ...mapDispatch,
  requestUsers,
})(withAuthRedirect(UsersAPIContainer));
