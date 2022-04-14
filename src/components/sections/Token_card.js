const Token = ({ item, onClick, onCollect }) => {

    return (
        <div className="ui fluid card">
            <div className="image" >
                {item.image[item.image.length - 1] == "4" ? (
                    <center>
                        <video onClick={onClick} controls width="200" position="center ">

                            <source src={`https://ipfs.io/ipfs/${
                                item.image.split("ipfs://")[1]
                                }`}
                                type="video/mp4"></source>

                        </video>
                    </center>) : <img
                        onClick={onClick}
                        style={{ maxHeight: "200px", objectFit: "cover", align: "middle" }}
                        src={`https://ipfs.io/ipfs/${
                            item.image.split("ipfs://")[1]
                            }`}
                        alt={item.description}

                    />}

            </div>
            <div onClick={onClick} className="content">
                <div className="right floated">
                    Price:
					<div style={{ color: "black" }}>{item.amount}</div>
                </div>
                <div className="header">{item.name}</div>
                <div className="meta">{item.symbol}</div>
                <div className="description">
                    {item.description.length > 15
                        ? item.description.slice(0, 15) + "..."
                        : item.description}
                </div>
            </div>

            <div className="extra content">
                <span className="right floated">
                    <button className="ui basic button" onClick={onCollect}>
                        {item.collectable ? "Buy" : "Sold Out"}
                    </button>
                </span>
                <span>
                    Token ID:
					<div style={{ color: "black" }}>{item.token_id}</div>
                </span>
            </div>
        </div>
    );
};

export default Token;