import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper.js";
import "./Splash.css";

class SplashComponent extends Component {
	render() {
		return (
			<div className="page">
				<p>Splash</p>
			</div>
		);
	}
}


const Splash = AnimatedWrapper(SplashComponent);
export default Splash;