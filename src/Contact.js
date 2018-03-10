import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./Contact.css";
import { Link } from "react-router-dom";

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
				<footer>
					<div className="footer">
						<div>
							<Link to="/morris"><img src="/morrisLogo.png" id="logo"/></Link>
						</div>
						<div className="links">
							<Link to="/morris" className="anOrderLink hoverEffect">Order Online</Link>
						</div>
						<div className="footerLinks">
							<Link to="/morris" className="aFooterLink hoverEffect">Home</Link>
							<Link to="/morris/services" className="aFooterLink hoverEffect">Services</Link>
							<Link to="/morris/news" className="aFooterLink hoverEffect">News</Link>
							<Link to="/morris/about" className="aFooterLink hoverEffect">About</Link>
							<Link to="/morris/careers" className="aFooterLink hoverEffect">Careers</Link>
							<Link to="/morris/contact" className="aFooterLink hoverEffect">Contact</Link>
						</div>
					</div>
					<div>© 2018 Morris Engineering. All rights reserved.</div>
				</footer>
			</div>
		);
	}
}

const Contact = AnimatedWrapper(ContactComponent);
export default Contact;