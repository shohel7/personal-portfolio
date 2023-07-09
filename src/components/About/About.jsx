import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./About.css";

import heroImg from "../../assets/images/about.jpg";
import Education from "./Education";
import Skills from "./Skills";
import Award from "./Award";

const About = () => {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>
          </Col>

          <Col lg="4" md="3">
            <div className="about__btns d-flex flex-column align-items-center">
              <button
                className={`about__btn ${
                  aboutFilter === "ABOUT" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About Me
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "EDUCATION" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "SKILLS" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "AWARD" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("AWARD")}
              >
                Award
              </button>
            </div>
          </Col>

          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about__content__wrapper d-flex gap-5">
                <div className="about__img w-25">
                  <img
                    className="img-fluid h-100"
                    src={heroImg}
                    alt="about images"
                  />
                </div>

                <div className="about__content w-75">
                  <h2>I'm Shohel Rana</h2>
                  <p>
                    I'm a passionate web developer, Each & every single bug
                    teaches me two things. one is to when I find a solution to
                    learn from it and the other one is "my mind says you're not
                    weak
                  </p>

                  <div className="social__links">
                    <h6>Connect with me: </h6>

                    <span>
                      <a href="https://web.facebook.com/akash.shohel">
                        <i class="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://github.com/shohel7">
                        <i class="ri-github-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://www.linkedin.com/in/shohel-ranac/">
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {aboutFilter === "EDUCATION" && <Education />}

            {aboutFilter === "SKILLS" && <Skills />}

            {aboutFilter === "AWARD" && <Award />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
