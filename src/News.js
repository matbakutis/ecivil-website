import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./News.css";


class NewsComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<div id="newsParallax">
						<div id="newsLeftTriangle">
						</div>
						<div id="newsRightTriangle">
							<div id="newsRightTriangleSmall">
								<div id="newsRightTriangleSmallest">
								</div>
							</div>
						</div>
						<h1 className="newsParallaxTitle">News</h1>
					</div>
					<div className="newsBreaker"></div>
				</div>
			</div>
		);
	}
}

const News = AnimatedWrapper(NewsComponent);
export default News;