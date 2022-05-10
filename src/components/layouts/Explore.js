import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { collectNFT } from "../../actions";
import Token from "../sections/Token_card";

const Explore = ({ Tezos }) => {
    const selector = useSelector(state => state.tokenData);
    const dispatch = useDispatch();
    const history = useHistory();

    const tokens = selector.map((obj, idx) =>
        <Token
            key={idx}
            item={obj}
            onCollect={() => dispatch(collectNFT({ Tezos, amount: obj.amount, id: obj.token_id }))}
            onClick={() => obj.collectable && history.push(`/show/${obj.token_id}`)}
            cardW={230}
        />
    );
    const randomToken = tokens[Math.floor(Math.random() * tokens.length)]
        

    return (
        <div>
            <h1 style={{
                fontFamily: 'Vast Shadow',
                color: '#6c669b',
                textAlign: "center"
            }}>
                NFT aléatoire
            </h1>
            <div style={{
                marginTop: '100px',
                lineHeight: "100%",
                textAlign: "center",
                justifyContent: 'center',
                marginLeft : '44%'
            }}>
                <div>
                    {randomToken}
                </div>
                <button >

                </button>
            </div>
        </div>

    );

};

export default Explore;