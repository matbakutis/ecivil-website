import React, { Component } from 'react';
import AnimatedWrapper from "./AnimatedWrapper";
import './Services.css';


class ServicesComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<h1>Services</h1>
				</div>
			</div>
		)
	}
}

const Services = AnimatedWrapper(ServicesComponent);
export default Services;