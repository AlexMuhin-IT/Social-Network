import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, state} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
				<App state={state} addPost={addPost}/>
	</BrowserRouter>
);

// const rerenderEntireTree = () =>
// 	ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// rerenderEntireTree.render(
// 		<BrowserRouter>
// 			<App state={state} addPost={addPost}/>;
// 		</BrowserRouter>
// 	)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
