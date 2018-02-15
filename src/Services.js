import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./Services.css";


class ServicesComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<div id="servicesParallax">
						<div id="servicesRightTriangle">
						</div>
						<div id="servicesLeftTriangle">
							<div id="servicesLeftTriangleSmall">
								<div id="servicesLeftTriangleSmallest">
								</div>
							</div>
						</div>
						<h1 className="servicesParallaxTitle">Services</h1>
					</div>
					<div className="servicesBreaker"></div>
				</div>
			</div>
		);
	}
}

const Services = AnimatedWrapper(ServicesComponent);
export default Services;