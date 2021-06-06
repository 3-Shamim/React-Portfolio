import React from "react";
import {Container, Row} from "react-bootstrap";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";

const Project = () => {

    const projects = [
        {
            id: 2,
            projectImage: "/images/project-image/s1.png",
            projectTitle: "Admin Portal",
            projectDescription: "This is a full functional admin portal for fabric base e-commerce  that built with ReactJS, AntD, Spring Boot.",
            workAt: {
                url: "https://zaagsys.com",
                name: "Zaag System Ltd."
            },
            contributions: ["Backend", "Admin Portal"],
            workWith: ["Spring Book", "MySQL", "ReactJS", "AntD"],
        },
        {
            id: 1,
            projectImage: "/images/project-image/Fembula.png",
            projectTitle: "Multi Vendor Ecommerce",
            projectDescription: "This is a multi vendor e-commerce for global product that built with ReactJS, NodeJS, MongoDB.",
            workAt: {
                url: null,
                name: "Freelance."
            },
            contributions: ["Admin Portal"],
            workWith: ["ReactJS", "AntD"],
        },
    ]

    return (
        <Container className="project-section">
            <SectionTitle title="Projects"/>
            <Row>
                {
                    projects && projects.map(project =>
                        <ProjectCard
                            key={project.id}
                            projectImage={project.projectImage}
                            projectTitle={project.projectTitle}
                            projectDescription={project.projectDescription}
                            workAt={project.workAt}
                            contributions={project.contributions}
                            workWith={project.workWith}
                        />
                    )
                }
            </Row>
        </Container>
    );
}

export default Project;
