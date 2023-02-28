import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "../SectionSubtitles/SectionSubtitle"
import classes from "./services.module.css";
import ServicesItem from "../ServicesItem/ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Frontend Development" icon="ri-apps-line" />

                <ServicesItem title="Backend Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Simple Solution,</h3>
            <h3 className="mb-4">Powerful Experience</h3>
            <p>
              I am passionate developer with more than 4 years of software engineering practices. I am always aiming to use
              my knowledge to its best extent. I am well acquainted with software architecture and practitioner of Domain
              Driven Design, Microservices, event driven architecture, CQRS and other software design approaches that best
              suits the engineering needs.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
