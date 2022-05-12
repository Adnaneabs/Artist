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
                        <div className="utils__top d-flex align-items-center justify-content-between">
                            <h3> Achetez et vendez vos NFTs  </h3>
                        </div>
                    </Col>
                    <Col lg="3" md="4" sm="6" className="mb-4">
                        <Card className="utils__card">
                            <CardBody className="utils__body">
                                <CardTitle tag="h5" className="utils__title">
                                    <IoWalletOutline/> Configurer votre wallet
                                </CardTitle>
                                <CardText>
                                    Une fois la configuration de votre wallet faite,
                                    connectez le à Artistic en appuyant sur l’icone wallet
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card className="utils__card">
                            <CardBody className="utils__body">
                                <CardTitle tag="h5" className="utils__title">
                                    <MdCollections/> Créer votre collection
                                </CardTitle>
                                <CardText>
                                    En vous connectant, vous pouvez créer votre collection.
                                    Ainsi, il faut ajouter les liens de vos réseaux sociaux, une description et un prix.
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card className="utils__card">
                            <CardBody className="utils__body">
                                <CardTitle tag="h5" className="utils__title">
                                    <HiDocumentDownload/> Ajouter vos NFTs
                                </CardTitle>
                                <CardText>
                                    Téléchargez votre oeuvre, ajouter un titre, une description et
                                    personnalisez vos NFTs avec différentes propriétées
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card className="utils__card">
                            <CardBody className="utils__body">
                                <CardTitle tag="h5" className="utils__title">
                                    <BiPurchaseTagAlt/> Mettez-les en vente
                                </CardTitle>
                                <CardText>
                                    Choississez entre vente aux enchères,
                                    des annonces à prix fixes ou des annonces à prix dégressif !
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Utils;