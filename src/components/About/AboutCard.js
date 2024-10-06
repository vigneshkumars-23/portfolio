import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vignesh Kumar S </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently working as a <span className="purple">Software Developer @IBM-CIO</span>
            <br />
            I have completed my <span className="purple">Bachelors (Computer Science Engg)</span> from <br />
            Amrita Vishwa Vidyapeetham, Coimbatore.
            <br />
            <br />
            My hobbies are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing FPS Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Stocks
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
