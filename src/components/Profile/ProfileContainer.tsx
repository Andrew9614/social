import React from 'react';
import { connect } from 'react-redux/es/exports';
import {
  addPost,
  getUser,
  putProfileStatus,
  getProfileStatus,
  unmountProfile,
  getFollow,
} from '../../redux/profilePageReducer';
import { AppDispatch, RootState } from '../../redux/reduxStore';
import { Profile } from './Profile';
import { withRouter } from '../common/withRouter';
import { Navigate, NavigateFunction } from 'react-router-dom';
import { Params } from '@remix-run/router';
import { changeFollowStatus } from '../../redux/usersPageReducer';

type ProfileContainerStateType = { state: RootState };

type ProfileContainerPropsType = ProfileContainerStateType &
  ReturnType<typeof mapDispatch> & {
    router?: {
      location: Location;
      navigate: NavigateFunction;
      params: Readonly<Params<string>>;
    };
  };

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount(): void {
    if (this.props.router?.params.userId) {
      this.props.getUser(this.props.router?.params.userId || '').then(() => {
        this.props.getFollow(+this.props.state.profilePage.profileInfo.userId);
      });
      this.props.getProfileStatus(this.props.router?.params.userId || '');
    }
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

  handleFollowClick = () => {
    this.props
      .changeFollowStatus(
        +this.props.state.profilePage.profileInfo.userId,
        this.props.state.profilePage.isFollow
      )
      .then(() =>
        this.props.getFollow(+this.props.state.profilePage.profileInfo.userId)
      );
  };

  render() {
    if (!this.props.router?.params.userId) {
      if (this.props.state.authData.data.id) {
        return (
          <Navigate to={'/profile/' + this.props.state.authData.data.id} />
        );
      } else {
        return <Navigate to={'/login/' + this.props.state.authData.data.id} />;
      }
    }
    return (
      <Profile
        isSelfPage={
          // eslint-disable-next-line eqeqeq
          this.props.router?.params.userId == this.props.state.authData.data.id
        }
        isFollowLoading={this.props.state.usersPage.loadingFollowButtons.some(
          (id) => id === +this.props.state.profilePage.profileInfo.userId
        )}
        addPost={this.props.addPost}
        profilePage={this.props.state.profilePage}
        putProfileStatus={this.props.putProfileStatus}
        handleFollowClick={this.handleFollowClick}
      />
    );
  }
}

const mapState = (state: RootState): ProfileContainerStateType => {
  return {
    state: state,
  };
};

const mapDispatch = (dispatch: AppDispatch) => ({
  getUser: (id: string) => dispatch(getUser(id)),
  addPost: (message: string) => dispatch(addPost(message)),
  putProfileStatus: (status: string) => dispatch(putProfileStatus(status)),
  getProfileStatus: (id: string) => dispatch(getProfileStatus(id)),
  unmountProfile: () => dispatch(unmountProfile()),
  getFollow: (id: number) => dispatch(getFollow(id)),
  changeFollowStatus: (id: number, followed: boolean) =>
    dispatch(changeFollowStatus(id, followed)),
});

export default connect(mapState, mapDispatch)(withRouter(ProfileContainer));
