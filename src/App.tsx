import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friendts";


function App(props: any) {

	return (
			<div className="app-wrapper">
				<Header/>
				<Navbar/>
				<div className="app-wrapper-content">
					<Routes>
						<Route path="/profile"
						       element={
							       <Profile
								       state={props.state.profilePage} addPost={props.addPost}/>}/>
						<Route path="/dialogs"
						       element={
							       <Dialogs
								       state={props.state.dialogPage}/>}/>
						<Route path="/news"
						       element={
							       <News/>}/>
						<Route path="/music"
						       element={
							       <Music/>}/>
						<Route path="/settings"
						       element={
							       <Settings/>}/>
						<Route path="/friends"
						       element={
							       <Friends
								       state={props.state}
							       />
						       }/>
					</Routes>
				</div>
				<Footer/>
			</div>
	);
}

export default App;
