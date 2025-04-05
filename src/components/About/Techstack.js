import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import {
  SiLaravel,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPhp,
} from "react-icons/si";
import aemIcon from "../../Assets/aem-icon.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 color="yellow" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact color="cyan" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs color="#8BC34A" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb color="#4CAF50" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs color="00B0FF" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit color="#FFB6C1" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap color="#B39DDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss color="#38BDF8" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript color="#007ACC" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel color="#FFB6C1" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql color="#4FC3F7" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp color="#E1BEE7" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={aemIcon} alt="AEM icon" style={{ maxHeight: "72px" }} />
      </Col>
    </Row>
  );
}

export default Techstack;
