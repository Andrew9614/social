import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux/es/exports';
import { setProfile } from '../../redux/profilePageReducer';
import { RootState } from '../../redux/reduxStore';
import { ProfileInfoType } from '../../redux/type';
import { Profile } from './Profile';

type ProfileContainerStateType = {
  state: RootState['profilePage'];
};

type ProfileContainerDispatchType = {
  setProfile: (profile: ProfileInfoType) => void;
};

class ProfileContainer extends React.Component<
  ProfileContainerStateType & ProfileContainerDispatchType
> {
  componentDidMount(): void {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/2')
      .then((response) => {
        this.props.setProfile(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render(): React.ReactNode {
    return <Profile state={this.props.state} />;
  }
}

const mapState = (state: RootState): ProfileContainerStateType => {
  return {
    state: state.profilePage,
  };
};

const mapDispatch: ProfileContainerDispatchType = {
  setProfile,
};

export default connect(mapState, mapDispatch)(ProfileContainer);
