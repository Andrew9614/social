import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from './redux/reduxStore';
import { DispatchAction } from './redux/type';
import { useEffect, useState } from 'react';
import { initializeApp } from './redux/appReducer';
import { Preloader } from './components/common/Preloader/Preloader';

export const App = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const handleChangeNavbarActive = (status?: boolean) => {
    setNavbarActive(status ? status : !navbarActive);
  };

  const dispatch: ThunkDispatch<RootState, unknown, DispatchAction> =
    useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);
	
  const isInitComplete = useSelector(
    (state: RootState) => state.appData.isInitComplete
  );
  return (
    <div className="app-wrapper">
      <HeaderContainer handleChangeNavbarActive={handleChangeNavbarActive} />
      {!isInitComplete ? (
        <Preloader className="preloaderContainer" />
      ) : (
        <>
          <Navbar
            navbarActive={navbarActive}
            handleChangeNavbarActive={handleChangeNavbarActive}
          />
          <div
            onClick={() => setNavbarActive(false)}
            id="appWrapperContent"
            className="app-wrapper-content"
          >
            <Routes>
              <Route path="/" element={<Navigate to={'/dialogs'} />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/dialogs/" element={<DialogsContainer />} />
              <Route path="/dialogs/:userId" element={<DialogsContainer />} />
              {/* <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} /> */}
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};
