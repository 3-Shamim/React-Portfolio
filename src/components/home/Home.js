import React from 'react';

import "./home.scss";
import {Container} from "react-bootstrap";

const Home = () => {

    const data = {
        title: "Shamim",
        desc: "Full-Stack java developer with specialization in building java based web applications using Spring Boot, JPA, RESTful API, Spring Security, JavaScript/Jquery, Thymeleaf, ReactJS."
    }

    return (
        <Container className="home-section">
            <div className="title">Hi, I am <span>{data.title}</span></div>
            <p className="desc">{data.desc}</p>
        </Container>
    );
}

export default Home;