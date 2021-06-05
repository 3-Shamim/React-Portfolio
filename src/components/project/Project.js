import React from "react";
import {Container, Row} from "react-bootstrap";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";

const Project = () => {

    const projects = [
        {
            id: 1,
            projectImage: "/images/project-image/Fembula.png",
            projectTitle: "Multi Vendor Ecommerce",
            projectDescription: "This is a multi vendor ecommerce that built with ReactJS."
        },
        {
            id: 2,
            projectImage: "/images/project-image/s1.png",
            projectTitle: "Admin Portal",
            projectDescription: "This is a full functional admin portal that built with ReactJS, AntD, Spring Boot."
        },
    ]

    return (
        <Container className="project-section">
            <SectionTitle title="Projects"/>
            <Row>
                {
                    projects && projects.map(project =>
                        <ProjectCard key={project.id}
                                     projectImage={project.projectImage}
                                     projectTitle={project.projectTitle}
                                     projectDescription={project.projectDescription}
                        />
                    )
                }
            </Row>
        </Container>
    );
}

export default Project;
