import React, { Component } from 'react';
import AnimatedWrapper from "./AnimatedWrapper";
import './Contact.css';


class ContactComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<h1>Contact</h1>
				</div>
			</div>
		)
	}
}

const Contact = AnimatedWrapper(ContactComponent);
export default Contact;