import React, {Fragment} from 'react';

import "./resume.scss"
import SectionTitle from "../common/SectionTitle";
import {Col, Container, ProgressBar, Row} from "react-bootstrap";
import {FiBookOpen, FiBriefcase} from "react-icons/all";
import ResumeHistory from "../common/ResumeHistory";
import HistoryTitle from "../common/HistoryTitle";

const Resume = () => {

    const htmlStrength = 98;
    const cssStrength = 93;
    const javaStrength = 97;
    const springBootStrength = 91;

    const educationalExperience = [
        {
            id: 1,
            designation: "Bachelor of Science",
            from: "2016",
            to: "2020",
            organizationName: "Southeast University",
            aboutOrganization: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia,\n" +
                "                                    aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam\n" +
                "                                    placeat libero. Deleniti"
        },
        {
            id: 2,
            designation: "Higher School Graduation",
            from: "2012",
            to: "2014",
            organizationName: "Abc College",
            aboutOrganization: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia,\n" +
                "                                    aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam\n" +
                "                                    placeat libero. Deleniti"
        }
    ];

    const workExperience = [
        {
            id: 1,
            designation: "Frontend Web Developer",
            from: "2018",
            to: "2020",
            organizationName: "Abc Company",
            aboutOrganization: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia,\n" +
                "                                    aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam\n" +
                "                                    placeat libero. Deleniti"
        },
        {
            id: 2,
            designation: "Frontend Web Developer",
            from: "2020",
            to: "Present",
            organizationName: "Abc Company",
            aboutOrganization: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia,\n" +
                "                                    aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam\n" +
                "                                    placeat libero. Deleniti"
        }
    ];

    return (
        <Fragment>
            <Container className="skill-section">
                <SectionTitle title="My Skills"/>
                <Row className="skill">
                    <Col lg={6}>
                        <div className="progress-bar-content">
                            <h6>HTML</h6>
                            <div className="progress-style">
                                <p>{htmlStrength}%</p>
                                <ProgressBar now={htmlStrength} label={`${htmlStrength}%`} srOnly/>
                            </div>
                        </div>

                        <div className="progress-bar-content">
                            <h6>CSS</h6>
                            <div className="progress-style">
                                <p>{cssStrength}%</p>
                                <ProgressBar now={cssStrength} label={`${cssStrength}%`} srOnly/>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="progress-bar-content">
                            <h6>Java</h6>
                            <div className="progress-style">
                                <p>{javaStrength}%</p>
                                <ProgressBar now={javaStrength} label={`${javaStrength}%`} srOnly/>
                            </div>
                        </div>
                        <div className="progress-bar-content">
                            <h6>Spring Boot</h6>
                            <div className="progress-style">
                                <p>{springBootStrength}%</p>
                                <ProgressBar now={springBootStrength} label={`${springBootStrength}%`} srOnly/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="resume-section">
                <SectionTitle title="Resume"/>
                <HistoryTitle icon={<FiBriefcase/>} title={"Working experience"}/>
                {
                    workExperience && workExperience.map(item =>
                        <ResumeHistory key={item.id}
                                       designation={item.designation}
                                       to={item.to}
                                       from={item.from}
                                       organizationName={item.organizationName}
                                       aboutOrganization={item.aboutOrganization}
                        />
                    )
                }

                <HistoryTitle icon={<FiBookOpen/>} title={"Educational Qualification"}/>
                {
                    educationalExperience && educationalExperience.map(item =>
                        <ResumeHistory key={item.id}
                            designation={item.designation}
                            to={item.to}
                            from={item.from}
                            organizationName={item.organizationName}
                            aboutOrganization={item.aboutOrganization}
                        />
                    )
                }
            </Container>
        </Fragment>
    );
}

export default Resume;