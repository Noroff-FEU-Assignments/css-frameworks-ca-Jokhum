import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function News() {
  return (
    <Container>
      <h1 className="my-4">News</h1>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button>1</Button> <Button variant="white-bg">2</Button>{" "}
          <Button variant="white-bg">3</Button>{" "}
          <Button variant="white-bg">4</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <Container className="px-0">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col className="mt-4">
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="./news-images/news-1.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="news-card">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="./news-images/news-2.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="news-card">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="./news-images/news-3.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="news-card">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="titleop" src="./news-images/news-4.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="news-card">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="./news-images/news-5.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="news-card">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mt-4">
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="./news-images/news-6.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="news-card">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} xl={3} className="mt-4">
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="./news-images/news-7.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="news-card">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} xl={3} className="mt-4">
            <Card style={{ width: "16rem" }}>
              <Card.Img variant="top" src="./news-images/news-8.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="news-card">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <ButtonToolbar aria-label="Toolbar with button groups" className="my-4">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button>1</Button> <Button variant="white-bg">2</Button>{" "}
          <Button variant="white-bg">3</Button>{" "}
          <Button variant="white-bg">4</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Container>
  );
}

export default News;
