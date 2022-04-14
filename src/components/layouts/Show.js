import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { collectNFT } from "../../actions";

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
        <div className="ui_internally_celled_grid">
            {data !== null ? (
                <>
                    <div className="ui">{data.description}</div>
                    <div className="row">
                        <div className="nine_wide_column">
                            {data.image[data.image.length - 1] == "4" ? (

                                <video controls width="250">
                                    <source src={`https://ipfs.io/ipfs/${
                                        data.image.split("ipfs://")[1]
                                        }`}
                                        type="video/mp4"></source>

                                </video>) :
                                <img
                                    style={{ maxHeight: "200px", objectFit: "cover", align: "middle" }}
                                    src={`https://ipfs.io/ipfs/${
                                        data.image.split("ipfs://")[1]
                                        }`}
                                    alt={data.description}

                                />}
                        </div>
                        <div className="seven_wide_column_container_center">
                            <div className="ui">
                                <h3 className="ui_right_floated_header">
                                    {data.name}
                                </h3>
                                <h3 className="ui_left_aligned_header">Name</h3>
                            </div>
                            <div className="ui">
                                <h3 className="ui_right_floated_header">
                                    {data.symbol}
                                </h3>
                                <h3 className="ui_left_aligned_header">
                                    Symbol
								</h3>
                            </div>
                            <div
                                className="ui "
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        data.holder + ""
                                    );
                                }}
                            >
                                <h3
                                    className="ui_right_floated_header_green"
                                    style={{ cursor: "pointer" }}
                                    data-content="Copy to clipboard"
                                >
                                    {data.holder?.slice(0, 6) + "..."}
                                </h3>
                                <h3 className="ui_left_aligned_header">
                                    Holder
								</h3>
                            </div>
                            <div
                                className="ui "
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        data.author + ""
                                    );
                                }}
                            >
                                <h3
                                    className="ui_right_floated_header_green"
                                    style={{ cursor: "pointer" }}
                                    data-content="Copy to clipboard"
                                >
                                    {data.author?.slice(0, 6) + "..."}
                                </h3>
                                <h3 className="ui_left_aligned_header">
                                    Author
								</h3>
                            </div>
                            <div className="ui">
                                <h3 className="ui_right_floated_header">
                                    {data.amount}
                                </h3>
                                <h3 className="ui_left_aligned_header">
                                    Price
								</h3>
                            </div>
                            <div className="ui">
                                <h3 className="ui_right_floated_header">
                                    {data.token_id}
                                </h3>
                                <h3 className="ui_left_aligned_header">
                                    Token ID
								</h3>
                            </div>
                            <div className="ui">
                                <button
                                    className="fluid_ui_button_basic_green"
                                    onClick={() =>
                                        data.collectable &&
                                        dispatch(
                                            collectNFT({
                                                Tezos,
                                                amount: data.amount,
                                                id: data.token_id,
                                            })
                                        )
                                    }
                                >
                                    {data.collectable ? "Buy" : "Sold Out"}
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default Show;