import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { connectWallet, disconnectWallet } from '../../actions';
import './Header.css'
import { AiOutlineWallet } from 'react-icons/ai';

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

            <a href="/#" className="logo">
                Artistic
            </a>
            <a>
                <input
                    class="searchBar"
                    type="text" />
            </a>
            <Link className="item" to="/" class='Home'>Home</Link>
            <Link className="item" to="/create" class='Create'>Create NFT</Link>
            <Link className="item" to="/explore" class='Explore'>Explorer</Link>
            <Link className="item" to="/account" class='Account'>Compte</Link>


            <div className="uiMenu-right">
                {(selector.userAddress === "") ?
                    <a href="/#" className="item" onClick={onClick} style={{ marginBottom: '10px' }}>
                        <div class = 'conn'>
                            Connect
                        </div>
                        <AiOutlineWallet style={{ fontSize: '50px' }} />
                    </a> :
                    <a href="/#" className="item" onClick={onClick}>
                        <div class = 'conn'>
                            Disconnect
                        </div>
                        <AiOutlineWallet style={{ fontSize: '50px' }} />
                    </a>}
            </div>
        </div>
    );
}

export default Header;