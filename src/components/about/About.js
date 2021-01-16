import React from 'react';

import "./about.scss"
import SectionTitle from "../common/SectionTitle";
import {Col, Container, Row} from "react-bootstrap";

const About = () => {

    const data = {
        title: "Shamim",
        desc: "Full-Stack developer with specialization in building java based web applications using Spring Boot, JPA, RESTful API, Spring Security, JavaScript/Jquery, Thymeleaf, ReactJS, NextJs, Flutter."
    }

    const information= {
        name: "Md. Shamim",
        nationality: "Bangladeshi",
        language: "Bengali, English",
        address: "668/1, East Manikdi, ECB Chattar, Dhaka.",
    }

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
                    <h3>I am <span>{data.title}</span></h3>
                    <p>{data.desc}</p>
                    <ul>
                        <li><b>Full Name</b> {information.name}</li>
                        <li><b>Nationality</b> {information.nationality}</li>
                        <li><b>Languages</b> {information.language}</li>
                        <li><b>Address</b> {information.address}</li>
                        <li><b>Freelance</b> Available</li>
                    </ul>
                    <a className="custom-button m-t-30" href="/files/shamim.pdf">Download CV</a>
                </Col>
            </Row>
        </Container>
    );
}

export default About;