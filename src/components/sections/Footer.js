import React, {useState} from 'react';
import {FiFacebook, FiTwitter,FiInstagram} from 'react-icons/fi';
import {FaTiktok} from "react-icons/fa";
import {FcReddit} from "react-icons/fc";
import { Container, Row, Col, ListGroup, ListGroupItem, Button} from "reactstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import {Link} from "react-router-dom";
import './Footer.css';

const MY__ACCOUNT = [
    {
        display: "Mon profil",
        url: "/seller-profile",
    },
    {
        display: "Créer",
        url: "/create",
    },
    {
        display: "Collection",
        url: "/home",
    },
    {
        display: "Edit Profile",
        url: "/edit-profile",
    },
];
const RESOURCES = [
    {
        display: "Aide",
        url: "#",
    },
    {
        display: "Partenaires",
        url: "#",
    },
    {
        display: "Communauté",
        url: "#",
    },
    {
        display: "Activités",
        url: "#",
    },
];
const COMPANY = [
    {
        display: "À propos",
        url: "#",
    },
    {
        display: "Classement",
        url: "#",
    },
    {
        display: "Contactez-nous",
        url: "/contact",
    }
];

const socialLinks = [
    <FiFacebook/>,
    <FiInstagram/>,
    <FiTwitter/>,
    <FaTiktok/>,
    <FcReddit/>

]

function Footer(){
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
                    <Col lg="2" md ="3" sm="6" className="mb-4">
                        <h4>Mon compte</h4>
                        <ListGroup className="list__group">
                            {MY__ACCOUNT.map((item,index) => (
                                    <ListGroupItem  key={index} className="list__item">
                                        <Link to={item.url}>{item.display}</Link>
                                    </ListGroupItem >
                                ))}
                        </ListGroup>
                    </Col>
                    <Col lg="2" md="3" sm="6" className="mb-4">
                        <h4>Ressources</h4>
                        <ListGroup className="list__group">
                            {RESOURCES.map((item, index) => (
                                <ListGroupItem key={index} className="list__item">
                                    <Link to={item.url}> {item.display} </Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col lg="2" md="3" sm="6" className="mb-4">
                        <h4>Artistic</h4>
                        <ListGroup className="list__group">
                            {COMPANY.map((item, index) => (
                                <ListGroupItem key={index} className="list__item">
                                    <Link to={item.url}> {item.display} </Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
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
                            {socialLinks.map((link,index) => (
                                <Link key={index} className="logoSocial">{link}</Link>
                            ))}
                        </div>
                    </Col>
                    <Col lg="12" className=" mt-4 text-center">
                        <p className="copyright">
                            {" "}
                            Copyrights 2022, Developed by Polytech Montpellier.
                            All Rights Reserved.{" "}
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default  Footer