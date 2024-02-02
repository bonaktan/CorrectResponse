import { createContext } from "react";

import { DisplayMode } from "./Data/enums.ts";

const Globals = {
    DisplayMode: DisplayMode.Input,
};
const GlobalVariables = createContext(Globals);

export default GlobalVariables;
export {Globals}
