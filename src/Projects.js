import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import "./Projects.css";


class ProjectsComponent extends Component {
	render(){
		return (
			<div className="page">
				<div className="title">
					<h1>Projects</h1>
				</div>
			</div>
		);
	}
}

const Projects = AnimatedWrapper(ProjectsComponent);
export default Projects;