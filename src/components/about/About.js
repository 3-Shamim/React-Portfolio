import React from 'react';

import "./about.scss"
import SectionTitle from "../common/SectionTitle";
import {Col, Container, Row} from "react-bootstrap";

const About = () => {
    return (
        <Container className="about-section">
            <SectionTitle title="About Me"/>
            <Row className="self-details">
                <Col lg={6}>
                    <div className="left">
                        <img src="/images/shamim-about-2.jpg" alt=""/>
                    </div>
                </Col>
                <Col className="right" lg={6}>
                    <h3>I am <span>Devid Chester</span></h3>
                    <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make
                        website more &amp; more interactive with web animations.</p>
                    <ul>
                        <li><b>Full Name</b> Devid Chester</li>
                        <li><b>Age</b> 24 Years</li>
                        <li><b>Nationality</b> American</li>
                        <li><b>Languages</b> English, French</li>
                        <li><b>Address</b> 121 King Street, Melbourne, Australia</li>
                        <li><b>Freelance</b> Available</li>
                    </ul>
                    <a className="custom-button m-t-30" href="/files/shamim.pdf">Download CV</a>
                </Col>
            </Row>
        </Container>
    );
}

export default About;