import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import icodegame from "../../Assets/Projects/icodegame.png";
import capital from "../../Assets/Projects/capital.png";
import adityabirla from "../../Assets/Projects/adityabirla.png";
import xoxoday from "../../Assets/Projects/xoxoday.png";
import helpr from "../../Assets/Projects/helpr.png";
import gm from "../../Assets/Projects/gm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capital}
              isBlog={false}
              title="CapitalGroup"
              description="Contributing to the development of AEM components using JavaScript, Tailwind CSS, and React.js for Storybook, enhancing the user experience and maintainability of the component library."
              demoLink="https://www.capitalgroup.com/advisor/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adityabirla}
              isBlog={false}
              title="Adiya Birla Group"
              description="ABSLI Led requirement gathering, team guidance, and production issue resolution for a Customer Portal, enabling policy management, payments, and profile updates. Built and integrated dynamic features using React.js, Node.js, MongoDB, MySQL, Google Analytics, and Hyperverge."
              demoLink="https://lifeinsurance.adityabirlacapital.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xoxoday}
              isBlog={false}
              title="Xoxoday"
              description="Redesigned the Admin Panel for a digital voucher platform, enabling seamless distribution and redemption of gift vouchers (Amazon, Flipkart, Myntra). Ensured smooth integration and live site updates using React.js, JavaScript, and Tailwind CSS."
              demoLink="https://www.xoxoday.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={icodegame}
              isBlog={false}
              title="iCodeNext Game"
              description="Designed and developed an educational platform from scratch, enabling lesson-based gameplay for students to learn coding. Managed course purchases by schools and parents, overseeing enrollment, attendance, scoring, and trial courses. Built and deployed the system using PHP (Laravel), MySQL, jQuery, Stripe, and AWS."
              demoLink="https://www.icodenext.com.au/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helpr}
              isBlog={false}
              title="Baby Sitter App"
              description="Developed a childcare assignment platform from scratch, enabling babysitter hiring with three user roles: sitters for service availability, users for booking and payments, and admins for seamless management. Built and deployed the system using Laravel, React.js, MySQL, and mobile support for Android and iOS."
              demoLink="https://hellohelpr.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gm}
              isBlog={false}
              title="UAT IDScan (Genious Money)"
              description="Developed an ID scanning system for tax deduction using government APIs, including UI design and integration. Led client communication, requirement gathering, backend development, and deployment. Built using Laravel, Vue.js, and MySQL."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://geniusmoney.co.uk/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
