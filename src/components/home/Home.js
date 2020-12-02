import React from 'react';

import "./home.scss";
import {Container} from "react-bootstrap";

const Home = () => {
    return (
        <Container className="home-section">
            <div className="title">Hi, I am <span>Shamim</span></div>
            <p className="desc">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
        </Container>
    );
}

export default Home;