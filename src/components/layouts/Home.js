import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { collectNFT } from "../../actions";
import Token from "../sections/Token_card";

const Home = ({ Tezos }) => {
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
    const tokensRecent = selector.map((obj, idx) =>
        <Token
            key={idx}
            item={obj}
            onCollect={() => dispatch(collectNFT({ Tezos, amount: obj.amount, id: obj.token_id }))}
            onClick={() => obj.collectable && history.push(`/show/${obj.token_id}`)}
            cardW={190}
        />
    );

    return (
        <div>
            <h1 style={{fontFamily :'Vast Shadow',
                        color : '#6c669b'}}>
                Les "pépites" du mois
                </h1>
            <div className="ui link three column grid cards">
                {tokens}
            </div>
            <h1 style={{fontFamily :'Vast Shadow',
                        color : '#6c669b',
                        marginTop : '30px'}}>
                Récemment créés
                </h1>
            <div className="ui link three column grid cards" >
                {tokensRecent}
            </div>
        </div>

    );

};

export default Home;