import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import "./Main.css";
import Home from "./Home.js";
import Careers from "./Careers.js";
import About from "./About.js";
import Services from "./Services.js";
import Contact from "./Contact.js";
import News from "./News.js";
import Order from "./Order.js";

const firstChild = props => {
	const childrenArray = React.Children.toArray(props.children);
	return childrenArray[0] || null;
};

class Main extends Component {
	render() {
		return (
			<div className="App">
				<nav id="navigation">
					<div>
						<Link to="/morris"><img src="/morrisLogo.png" id="logo"/></Link>
					</div>
					<div className="links">
						<Link to="/morris/order" className="anOrderLink hoverEffect">Order Online</Link>
					</div>
					<div className="links">
						<Link to="/morris" className="aLink hoverEffect">Home</Link>
						<Link to="/morris/services" className="aLink hoverEffect">Services</Link>
						<Link to="/morris/news" className="aLink hoverEffect">News</Link>
						<Link to="/morris/about" className="aLink hoverEffect">About</Link>
						<Link to="/morris/careers" className="aLink hoverEffect">Careers</Link>
						<Link to="/morris/contact" className="aLink hoverEffect">Contact</Link>
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
					path="/morris/careers"
					children={({ match, ...rest }) => (
						<TransitionGroup component={firstChild}>
							{match && <Careers {...rest} />}
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
				<Route
					exact
					path="/morris/news"
					children={({ match, ...rest }) => (
						<TransitionGroup component={firstChild}>
							{match && <News {...rest} />}
						</TransitionGroup>
					)}/>
					<Route
					exact
					path="/morris/order"
					children={({ match, ...rest }) => (
						<TransitionGroup component={firstChild}>
							{match && <Order {...rest} />}
						</TransitionGroup>
					)}/>
			</div>
		);
	}
}

export default Main;
