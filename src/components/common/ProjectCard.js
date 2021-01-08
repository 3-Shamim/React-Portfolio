import React, {Fragment} from "react";
import {Col} from "react-bootstrap";
import "./project_card.scss";

const ProjectCard = ({projectImage, projectTitle, projectDescription}) => {
    return (
        <Fragment>
            <Col lg={4} className="project-col">
                <div className="project-card">
                    <img src={projectImage} alt="alt"/>
                </div>
                <div className="project-card-details">
                    <h4>{projectTitle}</h4>
                    <p>{projectDescription}</p>
                </div>
            </Col>
        </Fragment>
    );
}

export default ProjectCard;
