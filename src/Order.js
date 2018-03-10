import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./Order.css";
import { Link } from "react-router-dom";

class OrderComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="orderContainer">
					<div className="engineeringContainer order">
						<img src="/pictures/engineeringPicture.jpg" className="orderPicture" id="leftPicture"/>
						<p>Accurate budgets are critical for project success.  MEI can complete quantity take-offs to help identify the complete scope of work so that all of the necessary items are addressed by contractors and subcontractors.  MEI can draw on its existing cost data base from previous projects to help prepare accurate cost estimates.  This will help owners develop accurate project budgets and ensure that 100% of their projects are funded to completion.</p>
					</div>
					<div className="residentialContainer order">
						<img src="/pictures/residentialPicture.jpg" className="orderPicture" id="rightPicture"/>
					</div>
				</div>
				<div id="floatBreaker"></div>
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

const Order = AnimatedWrapper(OrderComponent);
export default Order;