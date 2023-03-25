import { ErrorMessage, Form, Formik, Field } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AuthRequest } from '../../api/api';
import { loginUser } from '../../redux/authReducer';
import { getResponseMessageSelector } from '../../redux/authSelector';
import { RootState } from '../../redux/reduxStore';
import { DispatchAction } from '../../redux/type';
import styles from './login.module.css';

export type LoginProps = {
  loginUser: (request: AuthRequest) => void;
};
const getCaptchaURL = (state: RootState) => {
  return state.authData.captchaURL;
};

export const Login = () => {
  const dispatch: ThunkDispatch<RootState, unknown, DispatchAction> =
    useDispatch();
  const captcha = useSelector(getCaptchaURL);
  const responseMessage = useSelector(getResponseMessageSelector);
  const location = useLocation();
  const [redirect, setRedirect] = useState(false);
  const redirectPath = location.state ? location.state : '/profile';
  return redirect ? (
    <Navigate to={redirectPath} />
  ) : (
    <div>
      <Formik
        initialValues={{
          email: '',
          // password: '4ARNrECxbXj6nKS',
          password: '',
          rememberMe: false,
          captcha: '',
        }}
        validate={(values) => {
          const errors: { [key: string]: string } = {};
          if (!values.email) {
            errors.email = 'Email required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Password required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          //console.log(JSON.stringify(values, null, 2));
          dispatch(loginUser(values)).then((res) => res && setRedirect(true));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.formWrapper}>
            <div className={styles.formContainer}>
              <div className={styles.inputsWrapper}>
                <div className={styles.inputsContainer}>
                  <div className={styles.inputContainer}>
                    <Field type="email" name="email" placeholder="Email:" />
                    <ErrorMessage
                      className={styles.errorMessage}
                      name="email"
                      component="div"
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password:"
                    />
                    <ErrorMessage
                      className={styles.errorMessage}
                      name="password"
                      component="div"
                    />
                  </div>
                </div>
                <div className={styles.submitContainer}>
                  <button type="submit" disabled={isSubmitting}>
                    Log In
                  </button>
                  {responseMessage && (
                    <div className={styles.errorMessage}>{responseMessage}</div>
                  )}
                </div>
              </div>

              <div className={styles.checkboxContainer}>
                <Field type="checkbox" name="remember" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              {!captcha || (
                <div className={styles.captchaContainer}>
                  <img src={captcha} alt="captcha" />
                  <Field name="captcha" placeholder="Write text from image:" />
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
			<div className={styles.infoText}>
				<p>Test login: free@samuraijs.com <br />
				Test password: free</p>
			</div>
    </div>
  );
};
