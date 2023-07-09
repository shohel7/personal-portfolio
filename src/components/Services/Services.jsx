import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Service.css';

const servicesData = [
    {
        icon: 'ri-code-line',
        title: 'Web Design',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero consectetur ratione debitis deleniti blanditiis accusantium possimus minus expedita, cumque veritatis.',
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero consectetur ratione debitis deleniti blanditiis accusantium possimus minus expedita, cumque veritatis.',
    },
    {
        icon: 'ri-qr-code-line',
        title: 'App Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero consectetur ratione debitis deleniti blanditiis accusantium possimus minus expedita, cumque veritatis.',
    },
    {
        icon: 'ri-search-line',
        title: 'SEO',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero consectetur ratione debitis deleniti blanditiis accusantium possimus minus expedita, cumque veritatis.',
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero consectetur ratione debitis deleniti blanditiis accusantium possimus minus expedita, cumque veritatis.',
    },
    {
        icon: 'ri-gallery-line',
        title: 'UI / UX',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero consectetur ratione debitis deleniti blanditiis accusantium possimus minus expedita, cumque veritatis.',
    },
]

const Services = () => {
    return (
        <section id='services'>
            <Container>
                <Row>
                    <Col lg='12' className='service__top mb-5'>
                        <h6>Features</h6>
                        <h2>What service I provide</h2>
                    </Col>

                    {
                        servicesData.map((item, index) => (
                            <Col lg='4' md='6' sm='6' className='mb-4' key={index}>
                        <div className="single__service">
                            <span className='service__icon'>
                                <i className={item.icon}></i>
                            </span>

                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    </Col>
                    ))
                    }
                </Row>
            </Container>      
        </section>
    );
};

export default Services;