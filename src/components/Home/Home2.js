import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <div className="home-about-body">
              <ul style={{ paddingLeft: "20px", lineHeight: "1.8em" }}>
                <li>
                  I’m <b className="purple">Varun J</b>, a Computer Science
                  Engineering student specializing in{" "}
                  <b className="purple">Cyber Security</b>.
                </li>
                <li>
                  I love building impactful{" "}
                  <b className="purple">web apps</b> and exploring{" "}
                  <b className="purple">problem-solving challenges</b> in
                  hackathons.
                </li>
                <li>
                  I’m skilled in{" "}
                  <b className="purple">
                    Java, Python, SQL, and React-Spring Boot
                  </b>{" "}
                  with experience in{" "}
                  <b className="purple">REST APIs, Databases, and Git/GitHub</b>.
                </li>
                <li>
                  A <b className="purple">quick learner, problem solver, and team player</b>{" "}
                  who’s always eager to grow and create meaningful solutions.
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/varunjofficial07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/varun-j-1954a6253"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_.varunn._27/profilecard/?igsh=bTVnaWdsbHJlNHVl"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
