import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { connectWallet, disconnectWallet } from '../../actions';
import './Header.css'
import SearchBar from "../layouts/SearchBar";
import { Container } from "reactstrap";
import { AiOutlineWallet, AiOutlineMenu } from 'react-icons/ai';
import { GiPencilBrush } from 'react-icons/gi';
const NavigationLinks = [
    {
        display: 'Accueil',
        url: '/'
    },
    {
        display: 'Explorer',
        url: '/explore'
    },
    {
        display: 'Créer',
        url: '/create'
    },
    {
        display: 'Compte',
        url: '/account'
    }
]
const Header = ({ Tezos, wallet, setTezos }) => {
    const selector = useSelector(state => { return state.walletConfig.user });
    const dispatch = useDispatch();
    
    const onClick = (event) => {
        console.log("he")
            event.preventDefault();
        if (selector.userAddress === "") {
            dispatch(connectWallet({ Tezos, wallet }));
        } else {
            dispatch(disconnectWallet({ wallet, setTezos }));
        }
    }

    return (
        <header className="header">
            <Container>
                <div className='nav'>
                    <div className='logo'>
                        <h2 className=" d-flex gap-2 align-items-center">1Pix</h2>
                    </div>

                    <div className="menu">

                        <ul className="menu_list">
                            {
                                NavigationLinks.map((link, index) => (
                                    <li className="menu_items" key={index}>
                                        <NavLink to={link.url}> {link.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='menu_wallet d-flex align-items-center gap-5'>
                        {(selector.userAddress === "") ?
                            <div>
                                <button className="btn d-flex gap-2 align-items-center" onClick={onClick} href="/#">
                                    <span className="wallet">
                                        <AiOutlineWallet style={{ fontSize: '25px' }} />
                                    </span>
                                    <Link className="d-flex gap-2 align-items-center" >Connect Wallet</Link>
                                </button>
                                <span className="mobile_menu">
                                    <AiOutlineMenu />
                                </span>
                            </div>
                            :
                            <div>
                                <button className="btn d-flex gap-2 align-items-center" onClick={onClick} href="/#">
                                    <span className="wallet">
                                        <AiOutlineWallet style={{ fontSize: '25px' }} />
                                    </span>
                                    <Link className="d-flex gap-2 align-items-center">
                                        Disconnect
                                    </Link>
                                </button>
                                <span className="mobile_menu">
                                    <AiOutlineMenu />
                                </span>
                            </div>
                        }

                    </div>
                </div>
            </Container>

        </header>

    );
}

export default Header;