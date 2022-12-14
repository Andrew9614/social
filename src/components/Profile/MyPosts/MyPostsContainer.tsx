import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/reduxStore';
import { MyPosts } from './MyPosts';
import { MyPostsDispatchType, MyPostsStateTypes } from './types';

const mapStateToProps = (state: RootState): MyPostsStateTypes => {
  return {
    postsData: state.profilePage.postsData,
    newMyPostsTextArea: state.profilePage.newMyPostsTextArea,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch): MyPostsDispatchType => {
  return {
    handleChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch({ type: 'CHANGE_MY_POST_TEXT_AREA', message: e.target.value });
    },
    handleClickButton: () => dispatch({ type: 'ADD_POST' }),
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

// export const dMyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

// 	const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
// 		props.store.dispatch({ type: 'CHANGE-MY-POST-TEXT-AREA', message: e.target.value })
// 	}

// 	const handleClickButton = () => {
// 		props.store.dispatch({ type: 'ADD-POST' })
// 	}

// 	return (
// 		<StoreContext.Consumer>
// 			{value => {
// 				return (
// 					<MyPosts
// 						handleClickButton={handleClickButton}
// 						handleChangeTextArea={handleChangeTextArea}
// 						postsData={value.profilePage.postsData}
// 						newMyPostsTextArea={props.store.getState().profilePage.newMyPostsTextArea}
// 					/>
// 				)
// 			}}
// 		</StoreContext.Consumer>

// 	);
// }
