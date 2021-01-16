import React from 'react';

import "./contact.scss"
import SectionTitle from "../common/SectionTitle";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {FiMail, FiMapPin, FiPhone} from "react-icons/all";

const Contact = () => {
    return (
        <Container className="contact-section">
            <SectionTitle title="Contact Me"/>
            <Row className="contact">
                <Col lg={6}>
                    <h3 className="form-tile">Get in touch</h3>
                    <div className="contact-form">
                        <Form>
                            <Form.Group controlId="formBasicName" className="contact-form-group">
                                <Form.Label className="form-label-style">Enter your name*</Form.Label>
                                <Form.Control className="form-control-style" type="text"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail" className="contact-form-group">
                                <Form.Label className="form-label-style">Enter your email*</Form.Label>
                                <Form.Control className="form-control-style" type="email"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicSubject" className="contact-form-group">
                                <Form.Label className="form-label-style">Enter your subject*</Form.Label>
                                <Form.Control className="form-control-style" type="text"/>
                            </Form.Group>

                            <Form.Group controlId="formMessage" className="contact-form-group">
                                <Form.Label className="form-label-style">Enter your message*</Form.Label>
                                <Form.Control className="form-control-style" as="textarea" rows={3}/>
                            </Form.Group>

                            <Button className="custom-button" variant="primary" type="submit">
                                Send Mail
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="contact-details">
                        <Card className="card-style">
                            <Card.Body className="card-body-style">
                                <div className="icon">
                                    <FiPhone/>
                                </div>
                                <div className="card-details">
                                    <Card.Title>Phone</Card.Title>
                                    <Card.Text className="card-text-style">+8801781405615</Card.Text>
                                    <Card.Text className="card-text-style">+8801300498614</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="card-style">
                            <Card.Body className="card-body-style">
                                <div className="icon">
                                    <FiMail/>
                                </div>

                                <div className="card-details">
                                    <Card.Title>Email</Card.Title>
                                    <Card.Text className="card-text-style">info.sitename@example.com</Card.Text>
                                    <Card.Text className="card-text-style">info.sitename@example.com</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="card-style">
                            <Card.Body className="card-body-style">
                                <div className="icon">
                                    <FiMapPin/>
                                </div>

                                <div className="card-details">
                                    <Card.Title>Address</Card.Title>
                                    <Card.Text className="card-text-style">121 King Street, Melbourne, Victoria 3000, Australia</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;