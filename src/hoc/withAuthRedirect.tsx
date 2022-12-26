import React from 'react';
import { HTMLAttributes } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/reduxStore';

type ReturnComponentsType = {
  isLogin: boolean;
};

const mapState = (state: RootState): ReturnComponentsType => ({
  isLogin: state.authData.isLogin,
});

export function withAuthRedirect<P>(Component: React.ComponentType<P>) {
  const ReturnComponents = (props: ReturnComponentsType) => {
    const { isLogin, ...restProps } = props;
    if (!isLogin) return <Navigate to={'/login'} />;
    return <Component {...(restProps as P & HTMLAttributes<HTMLDivElement>)} />;
  };

  return connect(mapState)(ReturnComponents);
}
