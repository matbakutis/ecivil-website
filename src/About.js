import React, { Component } from 'react';
import AnimatedWrapper from "./AnimatedWrapper";
import "./About.css";

class AboutComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<h1>About</h1>
				</div>
			</div>
		)
	}
}

const About = AnimatedWrapper(AboutComponent);
export default About;