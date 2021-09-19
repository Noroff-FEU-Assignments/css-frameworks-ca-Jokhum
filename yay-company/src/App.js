import React from "react";
import "./sass/style.scss";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/ContactForm";
import News from "./components/News";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <div class="wrapper">
        <Navbar bg="light" expand="md">
          <Container>
            <Navbar.Brand href="#">The YAY Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0">
                <NavLink to="/home" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/news" className="nav-link">
                  News
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="primary">Go</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
