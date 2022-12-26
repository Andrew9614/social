import { ErrorMessage, Form, Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AuthRequest } from '../../api/api';
import { loginUser } from '../../redux/authReducer';
import { RootState } from '../../redux/reduxStore';
import { DispatchAction } from '../../redux/type';

export type LoginProps = {
  loginUser: (request: AuthRequest) => void;
};

export const Login = () => {
  const dispatch: ThunkDispatch<RootState, unknown, DispatchAction> =
    useDispatch();
  const captcha = useSelector((state: RootState) => state.authData.captchaURL);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
        captcha: '',
      }}
      validate={(values) => {
        const errors: { [key: string]: string } = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values, null, 2));
        dispatch(loginUser(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
          <Field type="checkbox" name="remember" />
          <label htmlFor="rememberMe">Remember me</label>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          {captcha ? (
            <div>
              <img src={captcha} alt="captcha" />
              Write text from image:
              <Field name="captcha" />
              <ErrorMessage name="captcha" component="div" />
            </div>
          ) : (
            ''
          )}
        </Form>
      )}
    </Formik>
  );
};
