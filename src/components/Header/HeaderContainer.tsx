import { connect } from 'react-redux/es/exports';
import React from 'react';
import { RootState } from '../../redux/reduxStore';
import { Header } from './Header';
import { isAuthLoading } from '../../redux/authReducer';

type HeaderContainerPropsType = RootState & {
  isAuthLoading: (status: boolean) => void;
};

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  render() {
    return (
      <Header
        isLogin={this.props.authData.isLogin}
				isLoading={this.props.authData.isLoading}
        login={this.props.authData.data.login || ''}
      />
    );
  }
}

const mapState = (state: RootState) => ({
  ...state,
});

const mapDispatch = {
  isAuthLoading,
};

export default connect(mapState, mapDispatch)(HeaderContainer);
