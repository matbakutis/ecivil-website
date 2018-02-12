import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./Contact.css";


class ContactComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<div id="contactParallax">
						<div id="contactRightTriangle">
						</div>
						<div id="contactLeftTriangle">
							<div id="contactLeftTriangleSmall">
								<div id="contactLeftTriangleSmallest">
								</div>
							</div>
						</div>
						<h1 className="contactParallaxTitle">Contact</h1>
					</div>
					<div className="contactBreaker"></div>
				</div>
			</div>
		);
	}
}

const Contact = AnimatedWrapper(ContactComponent);
export default Contact;