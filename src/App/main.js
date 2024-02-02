import React, { useContext } from "react";

import GlobalVariables, {Globals} from "./Globals.js";
import { DisplayMode } from "./Data/enums.ts";

import CorrectResponser from "./UI/main.jsx";
const main = () => {
    const Globals = useContext(GlobalVariables);
    // PURPOSE: link data and ui by being a custom hook
    const switchDisplayMode = switchDisplayMode;
};

const switchDisplayMode = (e) => {
    Globals.DisplayMode =
        Globals.DisplayMode === DisplayMode.Input
            ? DisplayMode.Display
            : DisplayMode.Input;
};

export default main;
export {switchDisplayMode};