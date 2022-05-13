import React from "react";
import './Pepite.css'
import {Col, Container, Row} from "reactstrap";
import {Link, useHistory} from "react-router-dom";
import {IoDiamondOutline, IoIosArrowForward} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import Token from "../sections/Token_card";
import {collectNFT} from "../../actions";;


function Pepite({Tezos}){
    const selector = useSelector(state => state.tokenData);
    const dispatch = useDispatch();
    const history = useHistory();

    const tokens = selector.slice(0, 4).map((obj, idx) =>
        <Col lg="3" md="4" sm="6" className="mb-4">
            <Token
                key={idx}
                item={obj}
                onCollect={() => dispatch(collectNFT({ Tezos, amount: obj.amount, id: obj.token_id }))}
                onClick={() => obj.collectable && history.push(`/show/${obj.token_id}`)}
            />
        </Col>

    );

    return(
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="pepite__top d-flex align-items-center justify-content-between">
                            <h3> <IoDiamondOutline/> Les "pépites" du mois  </h3>
                            <span>
                                <Link to="/explore">Voir plus <IoIosArrowForward/></Link>
                            </span>
                        </div>
                    </Col>
                    {tokens}
                </Row>
            </Container>
        </section>
    )
}

export default Pepite;