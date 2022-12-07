import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Settings } from './components/Settings/Settings';
import { Music } from './components/Music/Music';
import { AppPropsType } from './appType';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';


export const App: React.FC<AppPropsType> = (props) => {

	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar state={props.store.getState().sidebarPage} />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile' element={
							<Profile store={props.store} />}
						/>
						<Route path='/dialogs' element={
							<DialogsContainer store={props.store} />}
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

