import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./Splash.css";

class SplashComponent extends Component {
	render() {
		return (
			<div className="page">
				<p>what</p>
			</div>
		);
	}
}


const Splash = AnimatedWrapper(SplashComponent);
export default Splash;