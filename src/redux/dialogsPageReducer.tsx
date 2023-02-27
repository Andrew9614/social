import { messageAPI } from '../api/api';
import {
  DialogData,
  DialogsPage,
  DispatchAction,
  MessageData,
  ThunkType,
} from './type';

const SET_DIALOGS = 'SET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_TEMP_MESSAGE = 'ADD_TEMP_MESSAGE';
const IS_DIALOGS_LOADING = 'IS_DIALOGS_LOADING';
const IS_MESSAGES_LOADING = 'IS_MESSAGES_LOADING';
const IS_MESSAGE_SENDING = 'IS_MESSAGE_SENDING';
const SET_HAS_MORE = 'SET_HAS_MORE';
const CLEAR_DIALOGS = 'CLEAR_DIALOGS';
const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

// const initialState = {
//   dialogsData: [
//     {
//       id: 0,
//       name: 'Masha',
//       imgLink:
//         'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25',
//     },
//     {
//       id: 1,
//       name: 'Sasha',
//       imgLink:
//         'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg',
//     },
//     {
//       id: 2,
//       name: 'Dasha',
//       imgLink:
//         'https://imageio.forbes.com/specials-images/imageserve/611bde75926cb502bae8e75b/0x0.jpg?format=jpg&width=1200',
//     },
//     { id: 3, name: 'Evgeniy', imgLink: '' },
//     { id: 4, name: 'Obema', imgLink: '' },
//   ],
//   messagesData: [
//     { id: 0, message: 'Hello', self: false },
//     { id: 1, message: 'How are you', self: false },
//     { id: 2, message: "I'm gay", self: true },
//     { id: 3, message: 'I am doing well, thanks for asking', self: true },
//     {
//       id: 4,
//       message: 'What do you like to do in your free time?',
//       self: false,
//     },
//     {
//       id: 5,
//       message: 'I enjoy reading, watching movies, and going for walks',
//       self: true,
//     },
//     {
//       id: 6,
//       message: 'That sounds nice. I like those activities too',
//       self: false,
//     },
//     { id: 7, message: 'Have you read any good books lately?', self: false },
//     {
//       id: 8,
//       message:
//         'Yes, I recently finished a book called "The Alchemist" and really enjoyed it',
//       self: true,
//     },
//     {
//       id: 9,
//       message:
//         'Oh, I have heard good things about that book. I will have to check it out',
//       self: false,
//     },
//     {
//       id: 10,
//       message: 'I recommend it. It was a very uplifting and inspiring read',
//       self: true,
//     },
//     { id: 11, message: 'What kind of movies do you like?', self: false },
//     {
//       id: 12,
//       message:
//         'I like a variety of movies, but some of my favorites are sci-fi, fantasy, and action',
//       self: true,
//     },
//     {
//       id: 13,
//       message:
//         'I enjoy those genres as well. Have you seen any good movies recently?',
//       self: false,
//     },
//     {
//       id: 14,
//       message:
//         'Yes, I recently saw a movie called "Inception" and thought it was brilliant',
//       self: true,
//     },
//     {
//       id: 15,
//       message:
//         'I have heard great things about that movie. I will have to check it out',
//       self: false,
//     },
//     {
//       id: 16,
//       message:
//         'I highly recommend it. The plot is very unique and the acting is superb',
//       self: true,
//     },
//     { id: 17, message: 'Do you have any hobbies?', self: false },
//     { id: 18, message: 'Yes, I enjoy playing guitar and singing', self: true },
//     {
//       id: 19,
//       message:
//         'That is cool. I have always wanted to learn how to play an instrument',
//       self: false,
//     },
//     {
//       id: 20,
//       message:
//         'I recommend giving it a try. It is very rewarding to be able to make music',
//       self: true,
//     },
//     { id: 21, message: 'Do you have any pets?', self: false },
//     { id: 22, message: 'Yes, I have a dog and a cat', self: true },
//     { id: 23, message: 'What are their names?', self: false },
//     {
//       id: 24,
//       message: 'My dog is named Max and my cat is named Whiskers',
//       self: true,
//     },
//     {
//       id: 25,
//       message: 'That is a cute name for your dog. What breed is he?',
//       self: false,
//     },
//     { id: 26, message: 'Max is a Labrador Retriever', self: true },
//     {
//       id: 27,
//       message:
//         'Labradors are such great dogs. They are very friendly and loyal',
//       self: false,
//     },
//   ],
// };

const initialState: DialogsPage = {
  dialogsData: [],
  messagesData: [],
  isDialogsLoading: false,
  isMessagesLoading: false,
  isMessageSending: false,
  currentPage: 1,
  defaultSize: 20,
  hasMore: true,
};

export const dialogsPageReducer = (
  state: DialogsPage = initialState,
  action: DispatchAction
): DialogsPage => {
  switch (action.type) {
    case SET_DIALOGS:
      return {
        ...state,
        dialogsData: action.dialogs,
      };
    case SET_MESSAGES:
      return {
        ...state,
        messagesData: [...action.messages, ...state.messagesData],
        currentPage: state.currentPage + 1,
      };
    case SET_HAS_MORE:
      return {
        ...state,
        hasMore: action.status,
      };
    case IS_DIALOGS_LOADING:
      return {
        ...state,
        isDialogsLoading: action.status,
      };
    case IS_MESSAGES_LOADING:
      return {
        ...state,
        isMessagesLoading: action.status,
      };
    case ADD_TEMP_MESSAGE:
      const newTempMessage: MessageData = {
        addedAt: action.date.toString(),
        body: action.message,
        error: false,
        id: action.date.toString(),
        recipientId: action.recipientId,
        senderId: action.senderId,
        senderName: action.senderName,
        temp: true,
        viewed: false,
        translatedBody: null,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newTempMessage],
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messagesData: state.messagesData.map((el) =>
          el.temp && el.addedAt === action.date.toString() ? action.message : el
        ),
      };
    case CLEAR_DIALOGS:
      return {
        ...state,
        dialogsData: [],
      };
    case CLEAR_MESSAGES:
      return {
        ...state,
        messagesData: [],
        currentPage: 1,
        hasMore: true,
      };
    case REMOVE_MESSAGE:
      const index = state.messagesData.findIndex((el) => el.id === action.id);
      return {
        ...state,
        messagesData: [
          ...state.messagesData.slice(0, index),
          ...state.messagesData.slice(index + 1),
        ],
      };
    default:
      return state;
  }
};

export type setDialogsType = ReturnType<typeof setDialogs>;
export type setMessagesType = ReturnType<typeof setMessages>;
export type addMessageType = ReturnType<typeof addMessage>;
export type addTempMessageType = ReturnType<typeof addTempMessage>;
export type isDialogsLoadingType = ReturnType<typeof isDialogsLoading>;
export type isMessagesLoadingType = ReturnType<typeof isMessagesLoading>;
export type isMessageSendingType = ReturnType<typeof isMessageSending>;
export type setHasMoreType = ReturnType<typeof setHasMore>;
export type clearDialogsType = ReturnType<typeof clearDialogs>;
export type clearMessagesType = ReturnType<typeof clearMessages>;
export type removeMessageType = ReturnType<typeof removeMessage>;

const setDialogs = (dialogs: DialogsPage['dialogsData']) => {
  return { type: SET_DIALOGS, dialogs: dialogs } as const;
};
const setMessages = (messages: MessageData[]) => {
  return { type: SET_MESSAGES, messages: messages } as const;
};
const addMessage = (message: MessageData, date: number) => {
  return { type: ADD_MESSAGE, message: message, date: date } as const;
};
const addTempMessage = (
  message: string,
  date: number,
  recipientId: string,
  senderId: string,
  senderName: string
) => {
  return {
    type: ADD_TEMP_MESSAGE,
    message: message,
    date: date,
    recipientId: recipientId,
    senderId: senderId,
    senderName: senderName,
  } as const;
};
const isDialogsLoading = (status: boolean) => {
  return { type: IS_DIALOGS_LOADING, status: status } as const;
};
const isMessagesLoading = (status: boolean) => {
  return { type: IS_MESSAGES_LOADING, status: status } as const;
};
const isMessageSending = (status: boolean) => {
  return { type: IS_MESSAGE_SENDING, status: status } as const;
};
const setHasMore = (status: boolean) => {
  return { type: SET_HAS_MORE, status: status } as const;
};
export const clearDialogs = () => {
  return { type: CLEAR_DIALOGS } as const;
};
export const clearMessages = () => {
  return { type: CLEAR_MESSAGES } as const;
};
export const removeMessage = (id: string) => {
  return { type: REMOVE_MESSAGE, id: id } as const;
};

export const sendMessage =
  (
    recipientId: string,
    senderId: string,
    senderName: string,
    message: string
  ): ThunkType =>
  (dispatch) => {
    const sendTime = Date.now();
    dispatch(
      addTempMessage(message, sendTime, recipientId, senderId, senderName)
    );
    messageAPI
      .postMessage(recipientId, message)
      .then((response) => {
        //console.log(response.data.message);
        if (!response.resultCode)
          dispatch(addMessage(response.data.message, sendTime));
      })
      .catch((error) => {
        console.error(error);
      });
  };

export const getDialogs = (): ThunkType<Promise<any>> => async (dispatch) => {
  dispatch(isDialogsLoading(true));
  await messageAPI
    .getDialogs()
    .then(async (response) => {
      await dispatch(configureDialogs(response));
      dispatch(isDialogsLoading(false));
    })
    .catch((error) => {
      dispatch(isDialogsLoading(false));
      console.error(error);
    });
};

export const getMessages =
  (id: string): ThunkType =>
  (dispatch, getState) => {
    const state = getState();
    dispatch(isMessagesLoading(true));
    messageAPI
      .getMessages(
        id,
        state.dialogsPage.currentPage,
        state.dialogsPage.defaultSize
      )
      .then((response) => {
        if (response.items.length) {
          dispatch(setMessages(response.items));
          dispatch(isMessagesLoading(false));
        } else {
          dispatch(setHasMore(false));
          dispatch(isMessagesLoading(false));
        }
      })
      .catch((error) => {
        dispatch(isMessagesLoading(false));
        console.error(error);
      });
  };

export const configureDialogs =
  (dialogs: DialogData[]): ThunkType<Promise<any>> =>
  async (dispatch) => {
    // for (let el of dialogs) {
    //   const message = await messageAPI.getMessages(el.id, 1, 1);
    //   if (!message.items.length) {
    //     dialogs.splice(
    //       dialogs.findIndex((i) => i === el),
    //       1
    //     );
    //     continue;
    //   }
    //   el.lastMessage = message.items[0].body;
    // }
    dispatch(setDialogs(dialogs));
  };
export const deleteMessage =
  (messageId: string): ThunkType<Promise<any>> =>
  async (dispatch) => {
    messageAPI
      .deleteMessage(messageId)
      .then((res) => {
        if (!res.data.resultCode) {
          dispatch(removeMessage(messageId));
        } else {
          console.error(res.data.messages);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
