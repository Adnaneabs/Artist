import React from 'react'
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {MdOutlineTravelExplore} from "react-icons/md"
import {IoCreate} from "react-icons/io5"
import './Presentation.css'
import {useSelector} from "react-redux";
import {Carousel} from "react-bootstrap";

function Presentation(){
    //Contient tous les NFTs
    const selector = useSelector(state => state.tokenData);

    const imageNFT = selector.map((obj) =>
        <Carousel.Item interval={2500}>
            <img className="d-block w-100" src={`https://ipfs.io/ipfs/${
                obj.image.split("ipfs://")[1]
            }`} alt={obj.description} style={{width:'100%', marginLeft:'auto'}}/>
            <Carousel.Caption>
                <h3>{obj.description}</h3>
            </Carousel.Caption>
        </Carousel.Item>

    );


    return(
        <section className="section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='content'>
                            <h2 style={{lineHeight:'55px',
                                fontFamily:'Vast Shadow, sans-serif', fontSize:'2.5rem'}}>
                                Venez découvrir votre MarketPlace de NFTs
                            </h2>
                            <p style={{backgroundColor:'transparent', borderRadius:'20px',
                                backgroundSize:'100% 100%', marginLeft:'7px', display:'inline-block', fontFamily:'Vast Shadow, sans-serif'}}>
                                Achetez et vendez vos
                                <span > NFTs </span> sur notre plateforme
                            </p>
                        </div>

                        <div className='buttons d-flex align-items-center gap-4'>
                            <button className="explorer d-flex align-items-center gap-2">
                                <Link to="/explore" style={{textDecoration:'none', color:'white', fontFamily:'Vast Shadow, sans-serif'}}>Explorer <MdOutlineTravelExplore/> </Link>
                            </button>

                            <button className="creation d-flex align-items-center gap-2" style={{padding: '7px 25px' , borderRadius:'50px'}}>
                                <Link to="/create" style={{textDecoration:'none', color:'white', fontFamily:'Vast Shadow, sans-serif'}}>Créer <IoCreate/> </Link>
                            </button>
                        </div>
                    </Col>
                    {/*Ici, on veut mettre un truc qui défile*/}
                    <Col lg="6" md="6">
                        <div className="image">
                            <Carousel>
                                    {imageNFT}
                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Presentation;