import React from 'react';
import './Contact.css';
import { Container, Row, Col } from 'reactstrap';
import Form from '../Form/Form';

const Contact = () => {
    return (
        <section id='contact'>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2>Get In Touch</h2>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="contact__info-container d-flex align-items-center gap-5">
                            <div className="single__info-box w-50">
                                <h6>Address</h6>
                                <p>Dhanmondi, Dhaka, Bangladesh</p>
                            </div>
                            <div className="single__info-box w-50">
                                <h6>Phone</h6>
                                <p>+880 178 096 9001</p>
                            </div>
                        </div>

                        <div className="contact__info-container d-flex align-items-center gap-5">
                            <div className="single__info-box w-50">
                                <h6>Email</h6>
                                <p>shohelrana.swe@gmial.com</p>
                            </div>
                            <div className="single__info-box w-50">
                                <h6>Location</h6>
                                <p>1209 Zigatola, Dhanmondi</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <Form/>
                    </Col>
                </Row>
            </Container>     
        </section>
    );
};

export default Contact;