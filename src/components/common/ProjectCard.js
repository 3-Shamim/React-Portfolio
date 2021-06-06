import React from "react";
import {Col} from "react-bootstrap";
import "./project_card.scss";
import {Link} from "react-router-dom";

const ProjectCard = ({projectImage, projectTitle, projectDescription, workAt, contributions, workWith}) => {
    return (
        <>
            <Col lg={4} className="project-col">
                <div className="project-card">
                    <img src={projectImage} alt="alt"/>
                </div>
                <div className="project-card-details">
                    <h4>{projectTitle}</h4>
                    <p>{projectDescription}</p>
                    <div className="contributes">
                        <p>Contributes on</p>
                        {
                            contributions.map(v => <span key={v}>{v}</span>)
                        }
                    </div>
                    <div className="work-with">
                        <p>Work with</p>
                        {
                            workWith.map(v => <span key={v}>{v}</span>)
                        }
                    </div>
                    <div className="company-section">
                        <span className="label">At</span>
                        {
                            workAt.url ? <Link className="company" to={`//${workAt.url}`} target="_blank">
                                {workAt.name}
                            </Link> : <b>{workAt.name}</b>
                        }
                    </div>
                </div>
            </Col>
        </>
    );
}

export default ProjectCard;
