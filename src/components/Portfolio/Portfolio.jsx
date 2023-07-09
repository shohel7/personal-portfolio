import React from "react";
import "./Portfolio.css";
import { Container, Row, Col } from "reactstrap";

import portfolioImg from "../../assets/images/yoga.JPG";
import ecommerceImg from "../../assets/images/toys.JPG";
import doctorImg from "../../assets/images/recipe.JPG";

const portfolioData = [
  {
    title: "Yoga Zone",
    imgUrl: portfolioImg,
    technologies: "React | Express.JS | MongoDB | Stripe",
    liveUrl: "https://yoga-zone-40088.web.app/",
    gitUrl: "https://github.com/shohel7/yoga-zone-client",
  },
  {
    title: "Animal Toys",
    imgUrl: ecommerceImg,
    technologies: "React | Node.Js | Express.JS | MongoDB",
    liveUrl: "https://animal-toys-c0f6c.web.app/",
    gitUrl: "https://github.com/shohel7/animal-toys-client",
  },
  {
    title: "Italian Recipe",
    imgUrl: doctorImg,
    technologies: "React | Node.Js | Express.JS",
    liveUrl: "https://italiano-recipe.web.app/",
    gitUrl: "https://github.com/shohel7/italian-recipe-client",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio__top mb-5">
            <h6>Explore my work and give feedback</h6>
            <h2>Projects</h2>
          </Col>

          {portfolioData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                className="portfolio__card"
              >
                <div className="portfolio__img">
                  <img src={item.imgUrl} alt="images" className="w-100" />
                </div>

                <div className="portfolio__content">
                  <h3>{item.title}</h3>
                  <p>
                    {" "}
                    <a href={item.liveUrl}>Live Site</a> |{" "}
                    <a href={item.gitUrl}>GitHub</a>
                  </p>
                  <p>{item.technologies}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
