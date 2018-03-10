import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./News.css";
import { Link } from "react-router-dom";

class NewsComponent extends Component {
	constructor(){
		super();
		this.state = {
			articles: [
				{
					title: "CHLORIDE REDUCTION: WHAT YOU NEED TO KNOW",
					description: "Number of times Google Fonts API served Muli over the last week. Muli is featured in more than 560,000 websites.",
					image: "/pictures/example2.jpg",
					content: "",
					imageSide: "right",
					expanded: false
				},
				{
					title: "Article2",
					description: "Number of times Google Fonts API served Muli over the last week. Muli is featured in more than 560,000 websites.",
					image: "/pictures/example2.jpg",
					content: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.",
					imageSide: "left",
					expanded: false
				},
				{
					title: "Article3",
					description: "Number of times Google Fonts API served Muli over the last week. Muli is featured in more than 560,000 websites.",
					image: "/pictures/example2.jpg",
					content: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.",
					imageSide: "right",
					expanded: false
				},
			]
		};
	}

	expandArticle = (e) => {
		const state = this.state;
		state.articles[e.currentTarget.id].expanded = state.articles[e.currentTarget.id].expanded ? false : true;
		this.setState(state);
	}

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
					<a href="/chlorine.docx" target="blank" >Chlorine Article</a>
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

const News = AnimatedWrapper(NewsComponent);
export default News;