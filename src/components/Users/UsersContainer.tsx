import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reduxStore';
import { Users } from './Users';
import {
  onFollowChange,
  usersPageUnmount,
  toggleFollowButtonLoading,
  getUsers,
} from '../../redux/usersPageReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

// Z A L U P A
type UserAPIContainerPropsType = typeof mapDispatch & {
  state: RootState;
  getUsers: () => void;
};
// Z A L U P A

export class UsersAPIContainer extends React.Component<UserAPIContainerPropsType> {
  componentDidMount(): void {
    this.props.getUsers();
  }

  componentWillUnmount(): void {
    this.props.usersPageUnmount();
  }

  render() {
    return (
      <Users
        users={this.props.state.usersPage.users}
        followOnClick={this.props.onFollowChange}
        hasMore={!this.props.state.usersPage.emptyResponse}
        requestMoreUsers={this.props.getUsers}
        isButtonLoading={this.props.toggleFollowButtonLoading}
        loadingButtons={this.props.state.usersPage.loadingFollowButtons}
      />
    );
  }
}

const mapState = (state: RootState): { state: RootState } => ({
  state: state,
});

const mapDispatch = {
  onFollowChange,
  usersPageUnmount,
  toggleFollowButtonLoading,
};

export const UsersContainer = connect(mapState, { ...mapDispatch, getUsers })(
  withAuthRedirect(UsersAPIContainer)
);
