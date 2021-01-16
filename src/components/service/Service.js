import React from "react";
import {Container, Row} from "react-bootstrap";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../common/ServiceCard";
import {FiActivity, FiPenTool, FiSmartphone} from "react-icons/all";

const Service = () => {

    const mobileIcon = <FiSmartphone/>;
    const webDevIcon = <FiActivity/>;
    const webDsgnIcon = <FiPenTool/>;

    const services = [
        {
            id: 1,
            serviceName: "Web Design",
            serviceDescription: "I can provide responsive web design like PSD to HTML with HTML, CSS, SCSS, JS, ReactJS, NextJS"
        },
        {
            id: 2,
            serviceName: "Web Application Development",
            serviceDescription: "I can provide any kind of full stack web application by using Spring Boot, NodeJs, ReactJs, NextJS"
        },
        {
            id: 3,
            serviceName: "Mobile Application",
            serviceDescription: "I can provide mobile application by using Flutter"
        }
    ]

    return (
        <Container className="service-section">
            <SectionTitle title="Services"/>
            <Row>
                {
                    services && services.map(service =>
                        <ServiceCard
                            key={service.id}
                            icon={service.serviceName === "Mobile Application" ? mobileIcon :
                                service.serviceName === "Web Development" ? webDevIcon : webDsgnIcon}
                            serviceName={service.serviceName}
                            serviceDescription={service.serviceDescription}
                        />
                    )
                }
            </Row>
        </Container>
    );
}

export default Service;
