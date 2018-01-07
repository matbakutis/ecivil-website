import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./Home.css";

class HomeComponent extends Component {
	render() {
		return (
			<div className="page">
				<div className="title">
					<h1>Home</h1>
				</div>
			</div>
		);
	}
}


const Home = AnimatedWrapper(HomeComponent);
export default Home;