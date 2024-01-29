// Globals
import { useReducer, useState } from "react";

import Counter from "./data.js";
import { Tablecells } from "./helpers.js";

const useInput = () => {
    const Count = Counter(50); // default items is 50
    const [Mode, setMode] = useState(false); // true = display, false = display
    const [values, setValues] = useState(Tablecells(Count.values.current));
    const toggleMode = () => {
        setMode(!Mode);
    };

    const submitValue = (e) => {
        let input = e.target[0].value;
        e.preventDefault();
        let isUndo = input === ".";
        if (isUndo) {
            input = Count.commands.current.pop();
            input = input[0] === "-" ? input.substring(1) : "-" + input;
        } else {
            Count.commands.current.push(input);
        }
        if (Count.InputMode) {
            Count.AddModeSubmit(input);
        } else {
            Count.SubtractModeSubmit(input);
        }

        setValues(Tablecells(Count.values.current));
        DisplayNavigation("UpdateCurrent");
    };

    const sanityCheck = (e) => {
        if (Count.InputMode) {
            Count.AddSanityCheck(e);
        } else {
            Count.SubtractSanityCheck(e);
        }
    };

    const DisplayNavigation = (action) => {
        // TODO: maybe the sanitycheck refactor is unnecessary, might be reverted
        let num = null;
        switch (action) {
            case "PMAX":
                num = 1;
                break;
            case "PONE":
                num = Count.DisplayData.num - 1;
                break;
            case "NONE":
                num = Count.DisplayData.num + 1;
                break;
            case "NMAX":
                num = Count.DisplayData.max;
                break;
            case "UpdateCurrent":
                num = Count.DisplayData.num;
                break;
            default:
                throw new Error();
        }
        Count.updateDisplayData(num);
        forceUpdate(); // NOT IDEAL
    };
    const [, forceUpdate] = useReducer((x) => x + 1, 0); // NON-IDEAL BUT WHATEVER
    return {
        Mode,
        InputMode: Count.InputMode,
        values,
        toggleMode,
        submitValue,
        sanityCheck,
        DisplayData: Count.DisplayData,
        DisplayNavigation,
        setInputMode: Count.setInputMode
    };
};

export default useInput;
