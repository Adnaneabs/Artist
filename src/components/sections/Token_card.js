
import {Link} from "react-router-dom";
import './Token_card.css';

const Token = ({ item, onClick, onCollect }) => {
    return (
        <div className="token__card">
            <div className="token__image" >
                {item.image[item.image.length - 1] === "4" ? (
                    <center>
                        <video onClick={onClick} controls width="200px" height="150px" position="center ">

                            <source src={`https://ipfs.io/ipfs/${
                                item.image.split("ipfs://")[1]
                                }`}
                                type="video/mp4"/>

                        </video>
                    </center>) : <img
                        onClick={onClick}
                        className="w-100"
                        src={`https://ipfs.io/ipfs/${
                            item.image.split("ipfs://")[1]
                            }`}
                        alt={item.name}

                    />}

            </div>
            <div className="token__content">
                <h5 className="title__card">
                    <Link to={`/show/${item.token_id}`}>{item.name}</Link>
                </h5>
                <div className=" createur__info-wrapper d-flex gap-2">
                    <div className="createur__info w-100 d-flex align-items-center justify-content-between">
                        <div>
                            <h6> Prix </h6>
                            <p>{item.amount} {item.symbol} </p>
                        </div>
                        <div className="description">
                            <h6>Description</h6>
                            <p> {item.description.length > 15
                                ? item.description.slice(0, 15) + "..."
                                : item.description}</p>

                        </div>
                    </div>
                </div>
                <div className="mt-3 d-flex align-items-center justify-content-between">
                    <button className="buy__btn d-flex align-items-center gap-1" onClick={onCollect}>
                        {item.collectable ? "Buy" : "Sold Out"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Token;