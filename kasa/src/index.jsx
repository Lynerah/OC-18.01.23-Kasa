import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './pages/Home/index';
import About from './pages/About/about';
import Header from './components/Header';
import Error from './components/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import ProductDetail from './pages/Details/details-advertisement';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
<Router>
	<div className='body_container'>

	<Header></Header>
	<Routes>
		<Route exact path="/" element={<App />} />
		<Route path="/about" element={<About />} />
		<Route path="/product/:id" element={<ProductDetail />} /> 
		<Route path="*" element={<Error />} />
	</Routes>
	</div>
	<Footer></Footer>
</Router>
);