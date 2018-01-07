import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import "./App.css";
import Splash from "./Splash.js";


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
				{ this.state.splashPassed ? this.mainPages() : this.splashPage() }
			</div>
		);
	}
}

export default App;
