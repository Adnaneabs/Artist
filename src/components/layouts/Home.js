import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { collectNFT } from "../../actions";
import Token from "../sections/Token_card";
import Presentation from "./Presentation";
import Pepite from "./Pepite";
import Recent from "./Recent";
import Utils from "./Utils";

const Home = () => {
    return (
        <div>
            <Presentation/>
            <Pepite/>
            <Recent/>
            <Utils/>
        </div>

    );

};

export default Home;