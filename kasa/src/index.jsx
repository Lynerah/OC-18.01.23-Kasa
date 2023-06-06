import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home/index';
import About from './pages/About/about'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
	<React.StrictMode>
		<Router>
			{/* <Header></Header> */}
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route path="/about" element={<About />} />
				{/* <Route path="*" element={<Error />} /> */}
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
