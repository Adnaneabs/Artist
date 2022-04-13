import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { connectWallet, disconnectWallet } from '../../actions';
import './Header.css'
const Header = ({ Tezos, wallet, setTezos }) => {
    const selector = useSelector(state => { return state.walletConfig.user });
    const dispatch = useDispatch();

    const onClick = (event) => {
        event.preventDefault();
        if (selector.userAddress === "") {
            dispatch(connectWallet({ Tezos, wallet }));
        } else {
            dispatch(disconnectWallet({ wallet, setTezos }));
        }
    }

    return (
        <div className="uiMenu" >
            <a href="/#" class="logo">Artistic</a>
            <a>
            <input
                    class = "searchBar"
                    type="text" />
            </a>
            <Link className="item" to="/" class='Home'>Home</Link>
            {selector.userAddress !== "" ?
                <Link className="item" to="/create" class = 'Create'>Create NFT</Link>
                : null}

            <div className="uiMenu-right">
                {(selector.userAddress === "") ?
                    <a href="/#" className="item" onClick={onClick}>Connect Wallet</a> :
                    <a href="/#" className="item" onClick={onClick}>Disconnect Wallet</a>}
            </div>
        </div>
    );
}

export default Header;