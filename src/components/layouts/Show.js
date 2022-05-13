import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {burnNFT, collectNFT} from "../../actions";
import {Col, Container, Row} from "reactstrap";
import {AiFillHeart, AiOutlineEye, BiDotsVertical, FiSend, GrSend} from "react-icons/all";
import './Show.css'

const Show = ({ Tezos }) => {
    const selector = useSelector((state) => state.tokenData);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const temp = selector[parseInt(id)];
        if (temp) {
            setData(temp);
        }
    }, [selector, id]);

    return (
        <>
            {data !== null ? (
                <>
                    <h2 className="title">{data.name}</h2>
                    <section>
                        <Container>
                            <Row>
                                <Col lg="6" md="6" sm="6">
                                    {data.image[data.image.length - 1] === "4" ? (

                                            <video controls width="250" className="w-100 details__video">
                                                <source src={`https://ipfs.io/ipfs/${
                                                    data.image.split("ipfs://")[1]
                                                }`}
                                                        type="video/mp4"></source>

                                            </video>) :
                                        <img
                                            className="w-100 details__img"
                                            src={`https://ipfs.io/ipfs/${
                                                data.image.split("ipfs://")[1]
                                            }`}
                                            alt={data.description}

                                        />}
                                </Col>
                                <Col lg="6" md="6" sm="6">
                                    <div className="detail__content">
                                        <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                            <div className="d-flex align-items-center gap-4 detail__pref">
                                                <span> <i><AiOutlineEye/></i> 150 </span>
                                                <span> <i><AiFillHeart/></i> 100 </span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 detail__plus">
                                                <span> <i><FiSend/></i></span>
                                                <span> <i><BiDotsVertical/></i></span>
                                            </div>
                                        </div>
                                        <div className="details__author d-flex align-items-center gap-2 " onClick={() => {
                                                navigator.clipboard.writeText(
                                                    data.author + ""
                                                );
                                            }}>
                                            <div className="details__author">
                                                    <p>Créé par </p>
                                                    <h6 data-content="Copy to clipboard"> {data.author}</h6>
                                            </div>
                                        </div>
                                        <div className="details__holder d-flex align-items-center gap-3 " onClick={() => {
                                                navigator.clipboard.writeText(
                                                    data.holder + ""
                                                );
                                            }}>
                                            <div className="details__holder">
                                                <p>Acheté par</p>
                                                <h6 data-content="Copy to clipboard"> {data.holder}</h6>
                                            </div>

                                        </div>
                                        <div className="details__amount d-flex align-items-center gap-3 ">
                                            <p>Prix</p>
                                            <h6>{data.amount} {data.symbol}</h6>
                                        </div>
                                        <div className="details__descr d-flex align-items-center gap-3 ">
                                            <p className="my-4">
                                                {data.description}
                                            </p>
                                        </div>
                                            <button className="details__buybtn d-flex align-items-center gap-2 w-100" onClick={() =>
                                                data.collectable &&
                                                dispatch(
                                                    collectNFT({
                                                        Tezos,
                                                        amount: data.amount,
                                                        id: data.token_id,
                                                    })
                                                )
                                            }>{data.collectable ? "Buy" : "Sold Out"}</button>
                                        <button className="details__burnbtn d-flex align-items-center gap-2 w-100" onClick={() =>
                                            dispatch(
                                                burnNFT({
                                                    Tezos,
                                                    id: data.token_id,
                                                    amount: data.amount,
                                                })
                                            )
                                        }>Burn</button>
                                        </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </>
            ) : null}
        </>
    );
};

export default Show;