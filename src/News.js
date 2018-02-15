import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./News.css";


class NewsComponent extends Component {
	constructor(){
		super();
		this.state = {
			articles: [
				{
					title: "Article1",
					description: "Number of times Google Fonts API served Muli over the last week. Muli is featured in more than 560,000 websites.",
					image: "/pictures/example2.jpg",
					content: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.",
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
		const articles = this.state.articles.map((article, i)=>{
			return(
				<div key={i} className="newsArticleOuter">
					<div id={i} className="newsArticleInner" onClick={this.expandArticle}>
						<img src={article.image} className={article.imageSide === "right" ? "newsImageRight" : "newsImageLeft"} />
						<h2 className="articleTitle">{article.title}</h2>
						<h5 className="articleDescription" style={article.expanded ? {display: "none"} : {}}>{article.description}</h5>
						<p className="articleContent" style={!article.expanded ? {display: "none"} : {}}>{article.content}</p>
					</div>
				</div>
			);
		});

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
					{articles}
				</div>
			</div>
		);
	}
}

const News = AnimatedWrapper(NewsComponent);
export default News;