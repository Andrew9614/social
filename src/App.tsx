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
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile' element={
							<Profile
								profileData={props.data.postsData}
							/>}
						/>
						<Route path='/dialogs' element={
							<Dialogs
								dialogsData={props.data.dialogsData}
								messagesData={props.data.messagesData}
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

