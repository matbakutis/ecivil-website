import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./Home.css";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";

class HomeComponent extends Component {
	_handleImageLoaded() {
		setTimeout(() => {
			window.dispatchEvent(new Event("resize"));
		}, 0);
	}
	
	render() {

		return (
			<div className="page">
				<div className="title">
					
					<Carousel autoplay={true} wrapAround={true} className>
						<img src="pictures/example1.jpg" onLoad={this._handleImageLoaded}/>
						<img src="pictures/example2.jpg"/>
						<img src="pictures/example3.jpg"/>
						<img src="pictures/example4.jpg"/>
					</Carousel>
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


const Home = AnimatedWrapper(HomeComponent);
export default Home;