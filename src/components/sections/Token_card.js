
const Token = ({ item, onClick, onCollect, cardW }) => {

    return (
        <div className="ui fluid card" style={{ width: cardW }}>
            <div className="image" >
                {item.image[item.image.length - 1] === "4" ? (
                    <center>
                        <video onClick={onClick} controls width="200px" height="150px" position="center ">

                            <source src={`https://ipfs.io/ipfs/${
                                item.image.split("ipfs://")[1]
                                }`}
                                type="video/mp4"></source>

                        </video>
                    </center>) : <img
                        onClick={onClick}
                        style={{ maxHeight: "150px", objectFit: "cover", align: "middle" }}
                        src={`https://ipfs.io/ipfs/${
                            item.image.split("ipfs://")[1]
                            }`}
                        alt={item.description}

                    />}

            </div>
            <div onClick={onClick} className="content" style={{ backgroundColor: 'rgba(109, 102, 156, 0.68)' }}>
                <div className="right floated">
                    Price:
					<div style={{ color: "black" }}>{item.amount}</div>
                </div>
                <div className="name">{item.name}</div>
                <div className="meta">{item.symbol}</div>
                <div className="description">
                    {item.description.length > 15
                        ? item.description.slice(0, 15) + "..."
                        : item.description}
                </div>
            </div>

            <div className="extra content" style={{ backgroundColor: 'rgba(109, 102, 156, 0.68)' }}>
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