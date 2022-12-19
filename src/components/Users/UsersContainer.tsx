import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reduxStore';
import { UsersDispatchType, UsersStateType } from './types';
import { Users } from './Users';
import {
  isLoading,
  onFollowChange,
  setUsers,
  usersPageUnmount,
} from '../../redux/usersPageReducer';

type UserAPIContainerPropsType = UsersStateType & UsersDispatchType;

export class UsersAPIContainer extends React.Component<UserAPIContainerPropsType> {
  componentDidMount(): void {
    this.props.isLoading(true);
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/users?page=' +
          this.props.state.usersPage +
          '&count=' +
          this.props.state.usersCount,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.isLoading(false);
      })
      .catch((error) => {
        console.error(error);
        this.props.isLoading(false);
      });
  }

  requestMoreUsers = () => {
    this.props.isLoading(true);
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/users?page=' +
          this.props.state.usersPage +
          '&count=' +
          this.props.state.usersCount,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
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
        users={this.props.state.users}
        followOnClick={this.props.onFollowChange}
        hasMore={!this.props.state.emptyResponse}
        requestMoreUsers={this.requestMoreUsers}
      />
    );
  }
}

const mapState = (state: RootState): UsersStateType => {
  return {
    state: state.usersPage,
  };
};

const mapDispatch: UsersDispatchType = {
  onFollowChange,
  setUsers,
  usersPageUnmount,
  isLoading,
};

export const UsersContainer = connect(mapState, mapDispatch)(UsersAPIContainer);
