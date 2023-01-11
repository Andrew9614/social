import { connect } from 'react-redux/es/exports';
import React from 'react';
import { RootState } from '../../redux/reduxStore';
import { Header } from './Header';
import { isAuthLoading } from '../../redux/authReducer';

type HeaderContainerPropsType = RootState['authData'] & {
  isAuthLoading: (status: boolean) => void;
};

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  render() {
    return (
      <Header
        isLogin={this.props.isLogin}
        isLoading={this.props.isLoading}
        login={this.props.data.login || ''}
      />
    );
  }
}

const mapState = (state: RootState): RootState['authData'] => ({
  ...state.authData,
});

const mapDispatch = {
  isAuthLoading,
};

export default connect(mapState, mapDispatch)(HeaderContainer);
