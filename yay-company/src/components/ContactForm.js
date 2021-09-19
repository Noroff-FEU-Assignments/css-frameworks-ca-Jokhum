import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <>
      <Container className="my-4"></Container>
      <Container>
        <Row>
          <Col sm={12} className="mb-3">
            <h1>Submit Your Details</h1>
          </Col>
          <Col md={6}>
            <Form className="contact-form">
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group controlId="formBasicWebsite">
                <Form.Label>Website</Form.Label>
                <Form.Control type="website" placeholder="https://" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={8} />
                </Form.Group>
              </Form.Group>
              <Form.Check
                type="checkbox"
                label="Allow us to sell your personal details to whomever we want"
              />
              <Button variant="contact-submit" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="order-first order-md-0 mt-3">
            <Row>
              <Col xs={2} className="d-flex flex-column align-items-center">
                <i class="fas fa-envelope"></i>
                <i class="fas fa-phone"></i>
                <i class="fas fa-map-marker-alt"></i>
              </Col>
              <Col>
                <p>hello@yay.com</p>
                <p>123 456 7890</p>
                <p>123 Some Street</p>
                <p>Somewhere</p>
                <p>Some City</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
