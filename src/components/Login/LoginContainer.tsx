import { connect } from 'react-redux';
import { loginUser } from '../../redux/authReducer';
import { bindActionCreators } from 'redux'
import { Login } from './Login';
import { AppDispatch } from '../../redux/reduxStore';

type LoginContainerProps = ReturnType<typeof mapDispatchToProps>;;

const LoginContainer = (props: LoginContainerProps) => {
  return <Login />;
};
const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      loginUser,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(LoginContainer);
