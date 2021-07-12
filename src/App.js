import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavbarTest from './components/NavbarTest';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
	return (
		<Router>
			<div className='App'>
				<NavbarTest></NavbarTest>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/contact' component={Contact} />
			</div>
		</Router>
	);
}

export default App;
