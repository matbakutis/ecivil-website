import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./News.css";


class NewsComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<h1>News</h1>
				</div>
			</div>
		);
	}
}

const News = AnimatedWrapper(NewsComponent);
export default News;