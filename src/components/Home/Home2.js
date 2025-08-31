import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyImage from "../../Assets/MyImage.png";
import Tilt from "react-parallax-tilt";
import { FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import {  Button } from 'react-bootstrap'; // Import Card and Button
import { Card } from "react-bootstrap";
import Saloonshop from  "../../Assets/Saloonshop.png"
import Ksa4sale from  "../../Assets/Ksa4sale.png"
import Podstarz from  "../../Assets/Podstarz.png"


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
          {/* <Col md={12} className="home-about-description">
           <p className="home-about-body">
         I am passionate about staying up-to-date with the latest trends in web development and constantly improving my skills to deliver innovative solutions.
          </p>
          </Col> */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a frontend developer with a strong focus on building dynamic and responsive web applications 
            using modern JavaScript frameworks.
              <br />
              <br />My expertise lies in  
              <i>
                <b className="purple"> React.js and Next.js, </b>
              </i>
              where I leverage these technologies to create
               high-performance, user-friendly products.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />

              I am passionate about staying    <b className="purple">up-to-date</b> 
              with the latest trends in web development and constantly improving my
              <i>
                <b className="purple">
                  {" "}
                  skills 
                </b>
              </i>
              &nbsp; to deliver innovative solutions.
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
  <Tilt>
    <img src={MyImage} className="img-fluid" alt="avatar" style={{ width: '350px', height: '400px' }} />
  </Tilt>
</Col>
        </Row>
        <Row>

   <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
<Col md={4} className="project-card">
  <Card 
    className="project-card-view" 
    as="a" 
    href="https://podstarz.net/" 
    target="_blank"
    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
  >
    <Card.Img 
      variant="top" 
      src={Podstarz} 
      style={{ height: '200px', objectFit: 'cover' }} 
      alt="Next.js Project"
    />
    <Card.Body>
      <Card.Title>Podstarz</Card.Title>
      <Card.Text>
        An online celebrities platform for podcast in React.js, Node.js, and MongoDB. Login credentials will be provided upon request.
      </Card.Text>
      <Button variant="primary">Click</Button>
    </Card.Body>
  </Card>
</Col>
   <Col md={4} className="project-card">
  <Card 
    className="project-card-view" 
    as="a" 
    href="http://168.231.80.24:3002/#/login" 
    target="_blank"
    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
  >
    <Card.Img 
      variant="top" 
      src={Ksa4sale}
      style={{ height: '200px', objectFit: 'cover' }} 
      alt="Next/React.js Project"
    />
    <Card.Body>
      <Card.Title>Ksa4sale</Card.Title>
      <Card.Text>
        I used React.js and Next.js for it with Material UI. Login credentials will be provided upon request.
      </Card.Text>
      <Button variant="primary">Click</Button>
    </Card.Body>
  </Card>
</Col>
    <Col md={4} className="project-card">
  <Card 
    className="project-card-view" 
    as="a" 
    href="https://saloonshop.vercel.app/" 
    target="_blank" 
    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
  >
    <Card.Img 
      variant="top" 
      src={Saloonshop}
      style={{ height: '200px', objectFit: 'cover' }} 
      alt="Saloonshop"
    />
    <Card.Body>
      <Card.Title>Saloonshop</Card.Title>
      <Card.Text>
        A modern online platform developed with React.js, Node.js, and MongoDB that connects users with celebrities
      </Card.Text>
      <Button variant="primary">Click</Button>
    </Card.Body>
  </Card>
</Col>



        </Row>
      </Container>

          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
  <a
    href="https://wa.me/923355018663"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <FaWhatsapp />
  </a>
</li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ali-hamza-0983002b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/chwdry_hamzi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
  <a
    href="mailto:chwdryhamza1@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <FaEnvelope />
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
