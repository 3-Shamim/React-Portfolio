import React, {Fragment} from 'react';

import "./resume.scss"
import SectionTitle from "../common/SectionTitle";
import {Col, Container, ProgressBar, Row} from "react-bootstrap";
import {FiBriefcase} from "react-icons/all";

const Resume = () => {

    const htmlStrength = 98;
    const cssStrength = 93;
    const javaStrength = 97;
    const springBootStrength = 91;

    return (
        <Fragment>
            <Container className="skill-section">
                <SectionTitle title="My Skills"/>
                <Row className="skill">
                    <Col lg={6}>
                        <div className="progress-bar-content">
                            <h6>Html</h6>
                            <div className="progress-style">
                                <p>{htmlStrength}%</p>
                                <ProgressBar now={htmlStrength} label={`${htmlStrength}%`} srOnly/>
                            </div>
                        </div>

                        <div className="progress-bar-content">
                            <h6>Css</h6>
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
                <div className="work-experience-content">
                    <div className="title">
                        <FiBriefcase/>
                        <h4>Working experience</h4>
                    </div>
                    <div className="details">
                        <Row>
                            <Col lg={3} className="left">
                                <p>2018 - Present</p>
                            </Col>

                            <Col lg={9} className="right">
                                <h5>Frontend Web Developer</h5>
                                <p>Abc Company</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia,
                                    aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam
                                    placeat libero. Deleniti</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3} className="left">
                                <p>2018 - Present</p>
                            </Col>

                            <Col lg={9} className="right">
                                <h5>Frontend Web Developer</h5>
                                <p>Abc Company</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia,
                                    aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam
                                    placeat libero. Deleniti</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}

export default Resume;