import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { clearDialogs, getDialogs } from '../../redux/dialogsPageReducer';
import {
  getDialogsSelector,
  isDialogsLoadingSelector,
} from '../../redux/dialogsPageSelectors';
import { RootState } from '../../redux/reduxStore';
import { DispatchAction } from '../../redux/type';
import { Preloader } from '../common/Preloader/Preloader';
import { Dialogs } from './Dialogs';
import styles from './Dialogs.module.css';
import { MessengerContainer } from './Messenger/MessengerContainer';

const DialogsContainer = () => {
  const dialogs = useSelector(getDialogsSelector);
  const isDialogsLoading = useSelector(isDialogsLoadingSelector);
  const userId = useParams().userId || '';
  const dispatch: ThunkDispatch<RootState, unknown, DispatchAction> =
    useDispatch();
  const [isFirstStart, setFirstStart] = useState(true);
  const [isDialogsActive, setDialogsActive] = useState(!userId);
  useEffect(() => {
    if (!userId) {
      setDialogsActive(true);
    } else {
      setDialogsActive(false);
    }
  }, [userId]);

  useEffect(() => {
    dispatch(getDialogs()).then(() => setFirstStart(false));
  }, [dispatch, isDialogsActive]);

  useEffect(
    () => () => {
      dispatch(clearDialogs());
    },
    [dispatch]
  );
  return (
    <div className={styles.dialogs}>
      {isDialogsLoading && isFirstStart ? (
        <Preloader />
      ) : isDialogsActive ? (
        <Dialogs dialogs={dialogs} />
      ) : (
        <MessengerContainer activeUser={userId} />
      )}
    </div>
  );
};

export default withAuthRedirect(DialogsContainer);
