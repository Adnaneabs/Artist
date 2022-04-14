const Token = ({ item, onClick, onCollect, cardW }) => {
    return (
        <div className="ui fluid card" style={{width : cardW}}>
            <div className="image">
                <img
                    onClick={onClick}
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                    src={`https://ipfs.io/ipfs/${
                        item.image.split("ipfs://")[1]
                        }`}
                    alt={item.description}
                />
            </div>
            <div className="content" style={{backgroundColor : 'rgba(109, 102, 156, 0.68)'}}>
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

            <div className="extra content" style={{backgroundColor : 'rgba(109, 102, 156, 0.68)'}}>
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