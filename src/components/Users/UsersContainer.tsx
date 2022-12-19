import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reduxStore';
import { UsersDispatchType } from './types';
import { Users } from './Users';
import {
  isLoading,
  onFollowChange,
  setUsers,
  usersPageUnmount,
} from '../../redux/usersPageReducer';
import { usersAPI } from '../../api/api';

type UserAPIContainerPropsType = {state:RootState} & UsersDispatchType;

export class UsersAPIContainer extends React.Component<UserAPIContainerPropsType> {
  componentDidMount(): void {
    this.requestMoreUsers();
  }

  requestMoreUsers = () => {
    this.props.isLoading(true);
    usersAPI
      .getUsers(this.props.state.usersPage.currentPage, this.props.state.usersPage.usersCount)
      .then((response) => {
        this.props.setUsers(response.items);
        this.props.isLoading(false);
      })
      .catch((error) => {
        console.error(error);
        this.props.isLoading(false);
      });
  };

  componentWillUnmount(): void {
    this.props.usersPageUnmount();
  }

  render() {
    return (
      <Users
        users={this.props.state.usersPage.users}
        followOnClick={this.props.onFollowChange}
        hasMore={!this.props.state.usersPage.emptyResponse}
        requestMoreUsers={this.requestMoreUsers}
      />
    );
  }
}

const mapState = (state: RootState): { state: RootState } => ({
  state: state,
});

const mapDispatch: UsersDispatchType = {
  onFollowChange,
  setUsers,
  usersPageUnmount,
  isLoading,
};

export const UsersContainer = connect(mapState, mapDispatch)(UsersAPIContainer);
