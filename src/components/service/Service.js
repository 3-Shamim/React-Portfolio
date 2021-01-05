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
            serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
        },
        {
            id: 2,
            serviceName: "Web Development",
            serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
        },
        {
            id: 3,
            serviceName: "Mobile Application",
            serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
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
