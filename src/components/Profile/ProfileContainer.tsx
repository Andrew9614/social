import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux/es/exports';
import {
  addPost,
  changePostText,
  setProfile,
} from '../../redux/profilePageReducer';
import { RootState } from '../../redux/reduxStore';
import { DispatchAction, ProfileInfoType } from '../../redux/type';
import { Profile } from './Profile';
import { ProfileDispatchType, ProfileStateType } from './types';
import { withRouter } from '../common/withRouter';
import { NavigateFunction } from 'react-router-dom';
import { Params } from '@remix-run/router';

type ProfileContainerStateType = ProfileStateType;

type ProfileContainerDispatchType = ProfileDispatchType & {
  setProfile: (profile: ProfileInfoType) => DispatchAction;
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
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/profile/' +
          this.props.router?.params.userId
      )
      .then((response) => {
        this.props.setProfile(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render(): React.ReactNode {
    return (
      <Profile
        addPost={this.props.addPost}
        changePostText={this.props.changePostText}
        profilePage={this.props.profilePage}
      />
    );
  }
}

const mapState = (state: RootState): ProfileContainerStateType => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatch: ProfileContainerDispatchType = {
  setProfile,
  addPost,
  changePostText,
};

export default connect(mapState, mapDispatch)(withRouter(ProfileContainer));
