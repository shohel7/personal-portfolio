import React, { useRef, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import "./HeroSection.css";
import heroImg from "../../assets/images/hero-1.png";
import resume from "../../assets/resume/Resume_of_Shohel_Rana.pdf";

import { init } from "ityped";

const HeroSection = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: ["Shohel Rana", "a Passionat Coder"],
    });
  }, []);
  return (
    <section className="hero__section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="mb-3">Welcome to my portfolio</p>
              <h2 className="hero__title mb-4">
                I'm <span ref={textRef}></span>
              </h2>
              <h3>MERN Stack Web Developer</h3>
              <p>
                I'm a passionate web developer, Each & every single bug teaches
                me two things. one is to when I find a solution to learn from it
                and the other one is "my mind says you're not weak, just a
                little bit up your spirit and maintain your consistency that
                brings your success immediately.
              </p>
              <div className="social__links">
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

              <div className="mt-5 hero__btn d-flex align-items-center gap-4">
                <button className="btn">
                  <a href={resume} download>
                    Download Resume
                  </a>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img
                src={heroImg}
                alt="hero images"
                className="img-fluid h-100 "
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
