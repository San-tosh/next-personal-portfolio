import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "../SectionSubtitles/SectionSubtitle"
import classes from "./portfolio.module.css";

import {portfolio, PortfolioType} from "../../../data/portfolio";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

const Portfolio = () => {
  // const [filter, setFilter] = useState("Mobile App");
  const [data, setData] = useState<PortfolioType[]>();

  useEffect(() => {
    // if (filter === "Mobile App") {
    //
    // // }
    //
    // if (filter === "Web Design") {
    //   const filteredData = portfolio.filter(
    //     (item) => item.category === filter
    //   );
    //
    //   setData(filteredData);
    // }
  }, []);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My portfolio" />
            <h4 className="mt-4">Some of my distinguished works</h4>
          </Col>

          <Col lg="6" md="6">
          </Col>

          {portfolio.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
