import React, { useContext } from "react";

import GlobalVariables from "../Globals.js";
import { DisplayMode } from "../Data/enums.ts";

import Navbar from "./Navbar.jsx";
import Input from "./Input.jsx"
import Display from "./Display.jsx";

const CorrectResponser = () => {
    // Purpose: Switch out Display Modes
    const Globals = useContext(GlobalVariables);
    return (
        <div className="">
            <Navbar />
            {Globals.DisplayMode === DisplayMode.Input ? (
                <Input />
            ) : (
                <Display />
            )}
        </ div>
    );
};

export default CorrectResponser;