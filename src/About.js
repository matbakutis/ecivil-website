import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./About.css";
import { Link } from "react-router-dom";

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
					<div className="aboutBreaker"></div>
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

const About = AnimatedWrapper(AboutComponent);
export default About;