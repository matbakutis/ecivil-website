import React, { Component } from "react";
import AnimatedSplashWrapper from "./AnimatedSplashWrapper.js";
import { Link } from "react-router-dom";
import "./Splash.css";

class SplashComponent extends Component {
	render() {
		return (
			<div className="page">
				<img src="morrisLogo.png" alt="Morris Engineering Logo" id="splashLogo" />
				<video playsInline autoPlay muted loop poster="streets.png" id="bgvid">
					<source src="streets.webm" type="video/webm" />
					<source src="streets.mp4" type="video/mp4" />
				</video>
				<div className="buttonHolder">
					<Link to="/morris" className="btn">Continue to site...</Link>
					<Link to="platofsurvey.com" className="btn">Order Online</Link>
				</div>
			</div>
		);
	}
}


const Splash = AnimatedSplashWrapper(SplashComponent);
export default Splash;