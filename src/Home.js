import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./Home.css";
import Carousel from "nuka-carousel";

class HomeComponent extends Component {
	render() {
		return (
			<div className="page">
				<div className="title">
					
					<Carousel autoplay={true} wrapAround={true} className>
						<img src="pictures/example1.jpg"/>
						<img src="pictures/example2.jpg"/>
						<img src="pictures/example3.jpg"/>
						<img src="pictures/example4.jpg"/>
					</Carousel>
				</div>
			</div>
		);
	}
}


const Home = AnimatedWrapper(HomeComponent);
export default Home;