import { connect } from 'react-redux/es/exports';
import React from 'react';
import { RootState } from '../../redux/reduxStore';
import { Header } from './Header';
import { isAuthLoading, setAuthData } from '../../redux/authReducer';
import axios from 'axios';

type HeaderContainerPropsType = RootState & {
  setAuthData: (data: RootState['authData']['data']) => void;
  isAuthLoading: (status: boolean) => void;
};

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  handleClick = () => {
    this.props.isAuthLoading(true);
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
      })
      .then((response) => {
        this.props.isAuthLoading(false);
        if (response.data.resultCode === 0)
          this.props.setAuthData(response.data.data);
      })
      .catch((error) => {
        this.props.isAuthLoading(false);
        console.error(error);
      });
  };

  render() {
    return (
      <Header
        isLogin={this.props.authData.isLogin}
				isLoading={this.props.authData.isLoading}
        login={this.props.authData.data.login || ''}
        handleClick={this.handleClick}
      />
    );
  }
}

const mapState = (state: RootState) => ({
  ...state,
});

const mapDispatch = {
  setAuthData,
  isAuthLoading,
};

export default connect(mapState, mapDispatch)(HeaderContainer);
