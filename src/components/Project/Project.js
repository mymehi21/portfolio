import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import './Project.css'

function Project(props) {
	// This imports the information for the current project sent down.
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const techs = currentProject.technologies;
	const appLink = currentProject.deployed;
	const gitLink = currentProject.github;

	// This function parses the information from the array and creates a list.
	function getTechs(techArray) {
		let techList = "";

		for (var i = 0; i < techArray.length; i++) {
			if (i === techArray.length - 1) {
				techList += techArray[i];
			} else {
				techList += techArray[i] + ", ";
			}
		}

		return techList;
	}

	return (
		<div className="card-container">
		<Card.Img
		  variant="top"
		  src={require(`../../assets/images/${image}`)}
		  className="card-image"
		/>
		<div className="card-body">
		  <Card.Title className="card-title">{name}</Card.Title>
		  <Card.Text className="card-text">{description}</Card.Text>
		  <Card.Subtitle className="card-subtitle">Techs Used</Card.Subtitle>
		  <Card.Text className="card-techs">{getTechs(techs)}</Card.Text>
		  <div className="link-container">
    <Card.Link href={appLink} target="_blank" className="card-link">
        <img className="website" src={require(`../../assets/logos/website.png`)} alt="App Logo" />
    </Card.Link>
    <Card.Link href={gitLink} target="_blank" className="card-link">
        <img className="github-logo" src={require(`../../assets/logos/github-logo.png`)} alt="GitHub Logo" />
    </Card.Link>
</div>

		</div>
	  </div>
	);
}

export default Project;
