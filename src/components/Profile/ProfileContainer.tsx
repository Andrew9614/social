import React from 'react';
import { connect } from 'react-redux/es/exports';
import {
  addPost,
  getUser,
  putProfileStatus,
  getProfileStatus,
  unmountProfile,
} from '../../redux/profilePageReducer';
import { RootState } from '../../redux/reduxStore';
import { Profile } from './Profile';
import { withRouter } from '../common/withRouter';
import { NavigateFunction } from 'react-router-dom';
import { Params } from '@remix-run/router';

type ProfileContainerStateType = { state: RootState };

type ProfileContainerDispatchType = {
  getUser: (id: string) => void;
  addPost: (message: string) => void;
  putProfileStatus: (status: string) => void;
  getProfileStatus: (id: string) => void;
  unmountProfile: () => void;
};

type ProfileContainerPropsType = ProfileContainerStateType &
  ProfileContainerDispatchType & {
    router?: {
      location: Location;
      navigate: NavigateFunction;
      params: Readonly<Params<string>>;
    };
  };

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount(): void {
    this.props.getUser(this.props.router?.params.userId || '');
    this.props.getProfileStatus(this.props.router?.params.userId || '');
  }
  componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>): void {
    if (prevProps.router?.params.userId !== this.props.router?.params.userId) {
      this.props.getUser(this.props.router?.params.userId || '');
      this.props.getProfileStatus(this.props.router?.params.userId || '');
    }
  }
  componentWillUnmount(): void {
    this.props.unmountProfile();
  }
  render() {
    return (
      <Profile
        addPost={this.props.addPost}
        profilePage={this.props.state.profilePage}
        putProfileStatus={this.props.putProfileStatus}
      />
    );
  }
}

const mapState = (state: RootState): ProfileContainerStateType => {
  return {
    state: state,
  };
};

const mapDispatch: ProfileContainerDispatchType = {
  getUser,
  addPost,
  putProfileStatus,
  getProfileStatus,
  unmountProfile,
};

export default connect(mapState, mapDispatch)(withRouter(ProfileContainer));
