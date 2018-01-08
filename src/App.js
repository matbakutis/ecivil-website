import React, { Component } from "react";
import { Route } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import "./App.css";
import Splash from "./Splash.js";
import Main from './Main.js';


const firstChild = props => {
	const childrenArray = React.Children.toArray(props.children);
	return childrenArray[0] || null;
};

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route
					exact
					path="/"
					children={({ match, ...rest }) => (
					<TransitionGroup component={firstChild}>
						{match && <Splash {...rest} />}
					</TransitionGroup>
				)}/>
				<Route
					path="/morris"
					children={({ match, ...rest }) => (
					<TransitionGroup component={firstChild}>
						{match && <Main {...rest} />}
					</TransitionGroup>
				)}/>
			</div>
		);
	}
}

export default App;
