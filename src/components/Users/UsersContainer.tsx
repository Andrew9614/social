import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/reduxStore';
import { UsersDispatchType, UsersStateType } from './types';
import { Users } from './Users';

type UserAPIContainerPropsType = UsersStateType & UsersDispatchType;

export class UsersAPIContainer extends React.Component<UserAPIContainerPropsType> {
  componentDidMount(): void {
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/users?page=' +
          this.props.state.usersPage +
          '&count=' +
          this.props.state.usersCount
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  requestMoreUsers = () => {
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/users?page=' +
          this.props.state.usersPage +
          '&count=' +
          this.props.state.usersCount
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentWillUnmount(): void {
    this.props.usersPageUnmount();
  }

  render() {
    return (
      <Users
        users={this.props.state.users}
        followOnClick={this.props.followOnClick}
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

const mapDispatch = (dispatch: AppDispatch): UsersDispatchType => {
  return {
    followOnClick: (id) => dispatch({ type: 'FOLLOW_CHANGE', id: id }),
    setUsers: (users) => dispatch({ type: 'SET_USERS', users: users }),
    usersPageUnmount: () => dispatch({ type: 'USERS_PAGE_UNMOUNT' }),
  };
};

export const UsersContainer = connect(mapState, mapDispatch)(UsersAPIContainer);
