import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import {
  getHasMoreSelector,
  getMessagesSelector,
  isMessagesLoadingSelector,
} from '../../../redux/dialogsPageSelectors';
import { DispatchAction } from '../../../redux/type';
import {
  clearMessages,
  deleteMessage,
  getMessages,
  sendMessage,
} from '../../../redux/dialogsPageReducer';
import { RootState } from '../../../redux/reduxStore';
import { getAuthDataSelector } from '../../../redux/authSelector';
import { Messenger } from './Messenger';
import { getUser, unmountProfile } from '../../../redux/profilePageReducer';

type MessageContainerPropsType = {
  activeUser: string;
};

export const MessengerContainer = ({
  activeUser,
}: MessageContainerPropsType) => {
  const messages = useSelector(getMessagesSelector);
  const user = useSelector((state: RootState) => state.profilePage.profileInfo);
  const isMessagesLoading = useSelector(isMessagesLoadingSelector);
  const authData = useSelector(getAuthDataSelector);
  const hasMore = useSelector(getHasMoreSelector);

  const dispatch: ThunkDispatch<RootState, unknown, DispatchAction> =
    useDispatch();

  useEffect(() => {
    if (activeUser) {
      dispatch(getMessages(activeUser));
      dispatch(getUser(activeUser));
    }
  }, [dispatch, activeUser]);

  useEffect(
    () => () => {
      dispatch(clearMessages());
      dispatch(unmountProfile());
    },
    [dispatch]
  );

  const addMessage = (message: string) => {
    activeUser &&
      dispatch(sendMessage(activeUser, authData.id, authData.login, message));
  };
  const getMess = () => {
    activeUser && dispatch(getMessages(activeUser));
  };

  const deleteMess = (id: string) => {
    dispatch(deleteMessage(id));
  };

  return (
    <Messenger
      addMessage={addMessage}
      authData={authData}
      getMessages={getMess}
      deleteMessage={deleteMess}
      hasMore={hasMore}
      isMessagesLoading={isMessagesLoading}
      messages={messages}
      activeUser={user}
    />
  );
};
