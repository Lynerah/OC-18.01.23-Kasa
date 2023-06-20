import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './pages/Home/index';
import About from './pages/About/about';
import Header from './components/Header';
import Error from './components/Error';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import ProductDetail from './pages/Details/details-advertisement.jsx';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<Router>
	<Header></Header>
	<Routes>
		<Route exact path="/" element={<App />} />
		<Route path="/about" element={<About />} />
		<Route path="/product/:id" element={<ProductDetail />} /> 
		<Route path="*" element={<Error />} />
	</Routes>
	<Footer></Footer>
</Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
