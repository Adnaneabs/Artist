import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { collectNFT } from "../../actions";
import Token from "../sections/Token_card";
import {Col, Container, Row} from "reactstrap";

const Explore = ({ Tezos }) => {
    const selector = useSelector(state => state.tokenData);
    const dispatch = useDispatch();
    const history = useHistory();

    const tokens = selector.map((obj, idx) =>
        <Col lg="3" md="4"  sm="6" className="mb-4" key={idx}>
            <Token
                key={idx}
                item={obj}
                onCollect={() => dispatch(collectNFT({ Tezos, amount: obj.amount, id: obj.token_id }))}
                onClick={() => obj.collectable && history.push(`/show/${obj.token_id}`)}
            />
        </Col>

    );

    return (
        <div>
            <h2 style={{textAlign:'center', fontFamily:'Vast Shadow, sans-serif', color:'darkcyan', marginBottom:'20px'}}>Explorer</h2>
            <section>
                <Container>
                    <Row>
                        {tokens}
                    </Row>
                </Container>
            </section>
        </div>

    );

};

export default Explore;