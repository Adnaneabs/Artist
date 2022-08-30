import React, { useState } from "react";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { Container, Row, Col, Button } from "reactstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import "./Footer.css";

const socialLinks = [<FiInstagram />, <FiTwitter />];

function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="footer">
      <Container>
        <Row className="row">
          <Col lg="3" md="6" className="mb-4">
            <div className="logo">
              <h1 className="d-flex gap-2 align-items-center">1Pix</h1>
            </div>
          </Col>

          <Col lg="3" md="6" sm="6" className="mb-4">
            <h4>Newsletter</h4>
            <InputGroup className="mb-3">
              <input
                type="email"
                value={email}
                placeholder="Votre adresse mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button variant="outline-secondary" id="button-addon2">
                Valider
              </Button>
            </InputGroup>
            <div className=" d-flex gap-3 align-items-center">
              {socialLinks.map((link, index) => (
                <Link key={index} className="logoSocial">
                  {link}
                </Link>
              ))}
            </div>
          </Col>
          <Col lg="12" className=" mt-4 text-center">
            <p className="copyright">
              {" "}
              Copyrights 2022, Developed by Polytech Montpellier. All Rights
              Reserved.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
