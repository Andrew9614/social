import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { useLocation } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { clearDialogs, getDialogs } from '../../redux/dialogsPageReducer';
import {
  getDialogsSelector,
  isDialogsLoadingSelector,
} from '../../redux/dialogsPageSelectors';
import { RootState } from '../../redux/reduxStore';
import { DispatchAction } from '../../redux/type';
import { Preloader } from '../common/Preloader/Preloader';
import { DialogItem } from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import { Messenger } from './Messenger/Messenger';

export const Dialogs = () => {
  const dialogs = useSelector(getDialogsSelector);
  const isDialogsLoading = useSelector(isDialogsLoadingSelector);
  const route = useLocation();
  const dispatch: ThunkDispatch<RootState, unknown, DispatchAction> =
    useDispatch();

  const [isFirstStart, setFirstStart] = useState(true);
  const [isDialogsActive, setDialogsActive] = useState(
    route.pathname === '/dialogs'
  );
  const [isMessengerActive, setMessengerActive] = useState(
    route.pathname !== '/dialogs'
  );

  useEffect(() => {
    if (route.pathname === '/dialogs') {
      setDialogsActive(true);
    } else {
      setDialogsActive(false);
      setMessengerActive(true);
    }
  }, [route]);

  useEffect(() => {
    dispatch(getDialogs()).then(() => setFirstStart(false));
  }, [dispatch, isDialogsActive]);

  useEffect(
    () => () => {
      dispatch(clearDialogs());
    },
    [dispatch]
  );

  const handleDialogsTransitionEnd = (
    e: React.TransitionEvent<HTMLDivElement>
  ) => {
    if (e.propertyName === 'width' && isDialogsActive)
      setMessengerActive(false);
  };

  return isDialogsLoading && isFirstStart && isDialogsActive ? (
    <Preloader />
  ) : (
    <div className={styles.dialogs}>
      <div
        onTransitionEnd={handleDialogsTransitionEnd}
        className={
          styles.dialogsItems + (isDialogsActive ? ' ' + styles.active : '')
        }
      >
        {dialogs.map((el) => (
          <DialogItem
            key={el.id}
            id={el.id}
            lastMessage={el.lastMessage}
            name={el.userName}
            imgLink={
              el.photos.small ||
              'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
            }
          />
        ))}
      </div>
      {isMessengerActive && <Messenger img={} isDialogsActive={isDialogsActive} />}
    </div>
  );
};
