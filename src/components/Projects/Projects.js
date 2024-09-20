import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import {  Button } from 'react-bootstrap'; // Import Card and Button
import { Card } from "react-bootstrap";
import neuroEZ from  "../../Assets/neuroEZ.png"
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
      <Card className="project-card-view">
        <Card.Img 
          variant="top" 
          src="https://res.cloudinary.com/alpja/image/upload/v1702752592/vffs7bx9yrfsk98aorz9.png" 
          style={{ height: '200px', objectFit: 'cover' }} 
          alt="Next/React.js Project"
        />
        <Card.Body>
          <Card.Title>Next/React.js</Card.Title>
          <Card.Text>
            I used React.js and Next.js for it with Material UI. Login credentials will be provided if needed.
          </Card.Text>
          <Button 
            variant="primary" 
            href="https://tech.doingthistogether.com/login" 
            target="_blank"
          >
            Click
          </Button>
        </Card.Body>
      </Card>
    </Col>

    <Col md={4} className="project-card">
      <Card className="project-card-view">
        <Card.Img 
          variant="top" 
          src="https://res.cloudinary.com/alpja/image/upload/v1702752829/crsvhuzcpfgjvgdrdgz9.png" 
          style={{ height: '200px', objectFit: 'cover' }} 
          alt="Next.js Project"
        />
        <Card.Body>
          <Card.Title>Next.js</Card.Title>
          <Card.Text>
            This is a complete Next.js project for a USA hospital system. Login credentials will be provided upon request.
          </Card.Text>
          <Button 
            variant="primary" 
            href="https://medassist.devforhealth.com/" 
            target="_blank"
          >
            Click
          </Button>
        </Card.Body>
      </Card>
    </Col>


    <Col md={4} className="project-card">
      <Card className="project-card-view">
        <Card.Img 
          variant="top" 
          src={neuroEZ}
          style={{ height: '200px', objectFit: 'cover' }} 
          alt="NeuroEZ Sign-In"
        />
        <Card.Body>
          <Card.Title>Next/React.js</Card.Title>
          <Card.Text>
          This is a complete Next.js project neuroEZ for a USA hospital system. Login credentials will be provided upon request.
          </Card.Text>
          <Button 
            variant="primary" 
            href="https://neuroez.devforhealth.com/sign-in" 
            target="_blank"
          >
            Click
          </Button>
        </Card.Body>
      </Card>
    </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
