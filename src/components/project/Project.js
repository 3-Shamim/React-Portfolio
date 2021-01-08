import React from "react";
import {Container, Row} from "react-bootstrap";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";

const Project = () => {

    const projects = [
        {
            id: 1,
            projectImage: "/images/project-image/p1.jpg",
            projectTitle: "ERP",
            projectDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur."
        },
        {
            id: 2,
            projectImage: "/images/project-image/p2.jpg",
            projectTitle: "Inventory",
            projectDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur."
        },
        {
            id: 3,
            projectImage: "/images/project-image/p3.jpg",
            projectTitle: "Workshop",
            projectDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur."
        },
        {
            id: 4,
            projectImage: "/images/project-image/p3.jpg",
            projectTitle: "Workshop",
            projectDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur."
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
