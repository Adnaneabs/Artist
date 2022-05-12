import React from "react";
import {Card, CardBody, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import {BiPurchaseTagAlt, HiDocumentDownload, IoWalletOutline, MdCollections} from "react-icons/all";
import './Utils.css'

function Utils(){
    return(
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="utils__top d-flex  justify-content-between">
                            <h3> Achetez et vendez vos NFTs  </h3>
                        </div>
                    </Col>
                    <Col lg="3" md="4" sm="6" className=" utils__card mb-4">
                        <div className="utils__content">
                            <h5 className="utils__title">  <IoWalletOutline/> Configurer votre wallet</h5>
                            <div className="utils__text">
                                <p className="utils__body">  Une fois la configuration de votre wallet faite,
                                    connectez le à Artistic en appuyant sur l’icone wallet </p>
                            </div>
                        </div>
                    </Col> {' '}
                    <Col lg="3" md="4" sm="6" className=" utils__card mb-4">
                        <div className="utils__content">
                            <h5 className="utils__title">  <MdCollections/> Créer votre collection </h5>
                            <div className="utils__text">
                                <p className="utils__body">  En vous connectant, vous pouvez créer votre collection.
                                    Ainsi, il faut ajouter les liens de vos réseaux sociaux, une description et un prix. </p>
                            </div>
                        </div>
                    </Col> {' '}
                    <Col lg="3" md="4" sm="6" className=" utils__card mb-4">
                        <div className="utils__content">
                            <h5 className="utils__title"> <HiDocumentDownload/> Ajouter vos NFTs </h5>
                            <div className="utils__text">
                                <p className="utils__body">  Téléchargez votre oeuvre, ajouter un titre, une description et
                                    personnalisez vos NFTs avec différentes propriétées </p>
                            </div>
                        </div>
                    </Col>{' '}
                    <Col lg="3" md="4" sm="6" className=" utils__card mb-4">
                        <div className="utils__content">
                            <h5 className="utils__title"> <BiPurchaseTagAlt/> Mettez-les en vente </h5>
                            <div className="utils__text">
                                <p className="utils__body"> Choississez entre vente aux enchères,
                                    des annonces à prix fixes ou des annonces à prix dégressif !</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Utils;