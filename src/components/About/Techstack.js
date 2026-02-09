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
        <div title="JavaScript">
          <DiJavascript1 color="yellow" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="React">
          <DiReact color="cyan" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="Node.js">
          <DiNodejs color="#8BC34A" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="MongoDB">
          <DiMongodb color="#4CAF50" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="Next.js">
          <SiNextdotjs color="00B0FF" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="Git">
          <DiGit color="#FFB6C1" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="Bootstrap">
          <DiBootstrap color="#B39DDB" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="Tailwind CSS">
          <SiTailwindcss color="#38BDF8" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="TypeScript">
          <SiTypescript color="#007ACC" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="Laravel">
          <SiLaravel color="#FFB6C1" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="MySQL">
          <SiMysql color="#4FC3F7" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="PHP">
          <SiPhp color="#E1BEE7" />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div title="Adobe Experience Manager">
          <img src={aemIcon} alt="AEM icon" style={{ maxHeight: "72px" }} />
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
