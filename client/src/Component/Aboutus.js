import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './aboutus.css'; // Import the CSS file

function Aboutus() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>Welcome to Football Shop, your number one source for all things football. We're dedicated to giving you the very best of football gear, with a focus on quality, customer service, and uniqueness.</p>
          <p>Founded in 2023, Football Shop has come a long way from its beginnings in a small garage. When we first started out, our passion for providing the best equipment for football enthusiasts drove us to do intense research, and gave us the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the world, and are thrilled to be a part of the quirky, eco-friendly, fair trade wing of the football industry.</p>
          <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
          <p>Sincerely,</p>
          <p>Usama Ahmed, Founder</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To provide the best football gear with unmatched quality and service to football enthusiasts worldwide.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To be the global leader in football gear by focusing on customer satisfaction, innovation, and sustainable practices.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                Quality, Customer Service, Sustainability, Innovation, and Passion for Football.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Aboutus;
