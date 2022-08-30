import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { connectWallet, disconnectWallet } from "../../actions";
import "./Header.css";
import { Container } from "reactstrap";
import { AiOutlineWallet, AiOutlineMenu } from "react-icons/ai";
const NavigationLinks = [
  {
    display: "Accueil",
    url: "/",
  },
  {
    display: "Explorer",
    url: "/explore",
  },
  {
    display: "Créer",
    url: "/create",
  },
];
const Header = ({ Tezos, wallet, setTezos }) => {
  const selector = useSelector((state) => {
    return state.walletConfig.user;
  });
  const dispatch = useDispatch();

  const onClick = (event) => {
    console.log("he");
    event.preventDefault();
    if (selector.userAddress === "") {
      dispatch(connectWallet({ Tezos, wallet }));
    } else {
      dispatch(disconnectWallet({ wallet, setTezos }));
    }
  };

  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");
  return (
    <header className="header">
      <Container>
        <div className="nav">
          <div className="logo">
            <h2 className=" d-flex gap-2 align-items-center">1Pix</h2>
          </div>

          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu_list">
              {NavigationLinks.map((link, index) => (
                <li className="menu_items" key={index}>
                  <NavLink
                    to={link.url}
                    className={(menuC) => (menuC.isActive ? "active" : "")}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu_wallet d-flex align-items-center gap-5">
            {selector.userAddress === "" ? (
              <div>
                <button
                  className="btn d-flex gap-2 align-items-center"
                  onClick={onClick}
                  href="/#"
                >
                  <span className="wallet">
                    <AiOutlineWallet style={{ fontSize: "25px" }} />
                  </span>
                  <Link className="d-flex gap-2 align-items-center">
                    Connect
                  </Link>
                </button>
                <button
                  className="btn d-flex gap-2 align-items-center"
                  onClick={toggleMenu}
                >
                  <span className="mobile_menu">
                    <AiOutlineMenu />
                  </span>
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="btn d-flex gap-2 align-items-center"
                  onClick={onClick}
                  href="/#"
                >
                  <span className="wallet">
                    <AiOutlineWallet style={{ fontSize: "25px" }} />
                  </span>
                  <Link className="d-flex gap-2 align-items-center">
                    Disconnect
                  </Link>
                </button>
                <button
                  className="btn d-flex gap-2 align-items-center"
                  onClick={toggleMenu}
                >
                  <span className="mobile_menu">
                    <AiOutlineMenu />
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
