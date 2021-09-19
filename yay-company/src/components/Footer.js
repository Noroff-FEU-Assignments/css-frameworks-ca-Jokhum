import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="text-center my-1">
          <Col sm={12} md={4} className="text-md-start my-1">
            <i class="fab fa-vimeo-v"></i>
            <i class="fab fa-youtube"></i>
          </Col>
          <Col xs={6} md={4} className="my-auto">
            <p>hello@yay.com</p>
          </Col>
          <Col xs={6} md={4} className="text-md-end my-auto">
            <p>Copyright 2020</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
