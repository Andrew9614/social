import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Settings } from './components/Settings/Settings';
import { Music } from './components/Music/Music';


export const App: React.FC<AppProps> = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar state={props.state.sidebarPage} />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile' element={
							<Profile
								state={props.state.profilePage}
								handleChangeMyPostsTextArea={props.handleChangeMyPostsTextArea}
								handleClickMyPostsButton={props.handleClickMyPostsButton}
							/>}
						/>
						<Route path='/dialogs' element={
							<Dialogs
								state={props.state.dialogsPage}
								handleChangeMessagesTextArea={props.handleChangeMessagesTextArea}
								handleClickMessageButton={props.handleClickMessageButton}
							/>}
						/>
						<Route path='/news' element={<News />} />
						<Route path='/music' element={<Music />} />
						<Route path='/settings' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

