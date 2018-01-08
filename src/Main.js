import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import "./Main.css";
import Home from "./Home.js";
import Projects from "./Projects.js";
import About from "./About.js";
import Services from "./Services.js";
import Contact from "./Contact.js";


const firstChild = props => {
	const childrenArray = React.Children.toArray(props.children);
	return childrenArray[0] || null;
};

class Main extends Component {
	render() {
		return (
			<div className="App">
				<nav>
					<div className="linkHover">
						<Link to="/morris" className="aLink">Home</Link>
						<Link to="/morris/projects" className="aLink dropLink">Projects</Link>
						<Link to="/morris/about" className="aLink">About</Link>
						<Link to="/morris/services" className="aLink dropLink">Services</Link>
						<Link to="/morris/contact" className="aLink">Contact</Link>
					</div>
				</nav>
				<Route
					exact
					path="/morris"
					children={({ match, ...rest }) => (
						<TransitionGroup component={firstChild}>
							{match && <Home {...rest} />}
						</TransitionGroup>
					)}/>
				<Route
					exact
					path="/morris/projects"
					children={({ match, ...rest }) => (
						<TransitionGroup component={firstChild}>
							{match && <Projects {...rest} />}
						</TransitionGroup>
					)}/>
				<Route
					exact
					path="/morris/about"
					children={({ match, ...rest }) => (
						<TransitionGroup component={firstChild}>
							{match && <About {...rest} />}
						</TransitionGroup>
					)}/>
				<Route
					exact
					path="/morris/services"
					children={({ match, ...rest }) => (
						<TransitionGroup component={firstChild}>
							{match && <Services {...rest} />}
						</TransitionGroup>
					)}/>
				<Route
					exact
					path="/morris/contact"
					children={({ match, ...rest }) => (
						<TransitionGroup component={firstChild}>
							{match && <Contact {...rest} />}
						</TransitionGroup>
					)}/>
			</div>
		);
	}
}

export default Main;
