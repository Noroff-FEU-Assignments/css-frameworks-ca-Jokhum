import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

function SmallAccordion() {
  return (
    <Accordion defaultActiveKey="0" className="d-md-none">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            First
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Container>
              <Row>
                <Col className="order-5">
                  <img src="./tab-images/tab-1.jpg" alt="very nice TV" />
                </Col>
                <Col className="order-1">
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Second
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body></Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Third
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body></Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default SmallAccordion;
