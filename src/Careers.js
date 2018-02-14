import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./Careers.css";


class CareersComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<div id="careersParallax">
						<div id="careersRightTriangle">
						</div>
						<div id="careersLeftTriangle">
							<div id="careersLeftTriangleSmall">
								<div id="careersLeftTriangleSmallest">
								</div>
							</div>
						</div>
						<h1 className="careersParallaxTitle">Careers</h1>
					</div>
					<div className="careersBreaker">
						<div className="careersBreakerContent">
							<hr className="bar" />
							<p id="quoteText">Our growing Survey department performs over 3000 surveys annually in the Chicago metropolitan area.</p>
							<hr className="bar" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const Careers = AnimatedWrapper(CareersComponent);
export default Careers;