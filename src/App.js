import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import "./App.css";
import Splash from "./Splash.js";
import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Services from './Services.js';
import Contact from './Contact.js';


const firstChild = props => {
	const childrenArray = React.Children.toArray(props.children);
	return childrenArray[0] || null;
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			splashPassed: false
		};
	}

	splashPage = () => {
		return (<Splash />);
	}

	mainPages = () => {
		return (
			<div>
				<p>hello main pages</p>
			</div>
		);
	}

	render() {
		return (
			<div className="App">
				<nav>
					<div className="linkHover">
						<Link to="/" className="aLink">Home</Link>
						<Link to="/projects" className="aLink dropLink">Projects</Link>
						<Link to="/about" className="aLink">About</Link>
						<Link to="/services" className="aLink dropLink">Services</Link>
						<Link to="/contact" className="aLink">Contact</Link>
					</div>
				</nav>
				<Route
					exact
					path="/"
					children={({ match, ...rest }) => (
					<TransitionGroup component={firstChild}>
						{match && <Home {...rest} />}
					</TransitionGroup>
				)}/>
				<Route
					exact
					path="/projects"
					children={({ match, ...rest }) => (
					<TransitionGroup component={firstChild}>
						{match && <Projects {...rest} />}
					</TransitionGroup>
				)}/>
				<Route
					exact
					path="/about"
					children={({ match, ...rest }) => (
					<TransitionGroup component={firstChild}>
						{match && <About {...rest} />}
					</TransitionGroup>
				)}/>
				<Route
					exact
					path="/services"
					children={({ match, ...rest }) => (
					<TransitionGroup component={firstChild}>
						{match && <Services {...rest} />}
					</TransitionGroup>
				)}/>
				<Route
					exact
					path="/contact"
					children={({ match, ...rest }) => (
					<TransitionGroup component={firstChild}>
						{match && <Contact {...rest} />}
					</TransitionGroup>
				)}/>
			</div>
		);
	}
}

export default App;
