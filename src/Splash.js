import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper.js";
import { Link } from "react-router-dom";
import "./Splash.css";

class SplashComponent extends Component {
	render() {
		return (
			<div className="page">
				<p>Splash</p>
				<Link to="/morris" className="aLink">Home</Link>
			</div>
		);
	}
}


const Splash = AnimatedWrapper(SplashComponent);
export default Splash;