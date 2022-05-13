import React from "react";
import Token from "../sections/Token_card";
import {collectNFT} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";
import {IoIosArrowForward, MdOutlineNewReleases} from "react-icons/all";
import './Pepite.css'

function Recent({Tezos}){
    const selector = useSelector(state => state.tokenData);
    const dispatch = useDispatch();
    const history = useHistory();
    const tokensRecent = selector.slice(-4, selector.length).map((obj, idx) =>
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
                            <h3> <MdOutlineNewReleases/> Récent </h3>
                            <span>
                                <Link to="/explore">Voir plus <IoIosArrowForward/></Link>
                            </span>
                        </div>
                    </Col>
                    {tokensRecent}
                </Row>
            </Container>
        </section>

    )
}

export default Recent;