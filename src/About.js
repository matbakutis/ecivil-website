import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./About.css";

class AboutComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<div id="aboutParallax">
						<div id="aboutLeftTriangle">
						</div>
						<div id="aboutRightTriangle">
							<div id="aboutRightTriangleSmall">
								<div id="aboutRightTriangleSmallest">
								</div>
							</div>
						</div>
						<h1 className="aboutParallaxTitle">About</h1>
					</div>
					<div className="aboutBreaker">
						<img id="first-quote" src="pictures/quote2.png" alt="First Quote" /> 
						<img id="second-quote" src="pictures/quote.png" alt="Second Quote" /> 
						<p>Our growing Survey department performs over 3000 surveys annually in the Chicago metropolitan area.</p>
					</div>
				</div>
			</div>
		);
	}
}

const About = AnimatedWrapper(AboutComponent);
export default About;