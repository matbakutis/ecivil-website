import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./Careers.css";


class CareersComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<h1>Careers</h1>
				</div>
			</div>
		);
	}
}

const Careers = AnimatedWrapper(CareersComponent);
export default Careers;