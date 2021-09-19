import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Media from "react-bootstrap/Media";

function ContentTabs() {
  return (
    <Tabs
      defaultActiveKey="first"
      id="uncontrolled-tab-example"
      className="mb-3 d-md-none d-lg-flex"
    >
      <Tab eventKey="first" title="First">
        <Media className="d-flex p-3">
          <img
            className="px-2"
            width={250}
            src="./tab-images/tab-1.jpg"
            alt="Very nice TV"
          />
          <Media.Body className="ml-2 px-2 d-flex flex-column justify-content-around">
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
            <div className="social-media-tabscontent">
              SHARE
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </Media.Body>
        </Media>
      </Tab>
      <Tab eventKey="second" title="Second"></Tab>
      <Tab eventKey="third" title="Third"></Tab>
    </Tabs>
  );
}

export default ContentTabs;
