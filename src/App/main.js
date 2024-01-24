// Globals
import { useReducer, useState } from "react";

import Counter from "./data.js";
import { Tablecells } from "./helpers.js";

const useInput = () => {
    const Count = Counter(50); // default is 50
    const [Mode, setMode] = useState(false); // true = display, false = display
    const [values, setValues] = useState(Tablecells(Count.values.current));
    const toggleMode = () => {
        setMode(!Mode);
    };
    const submitValue = (e) => {
        e.preventDefault();
        Count.submitValue(parseInt(e.target[0].value));
        setValues(Tablecells(Count.values.current));
    };
    const sanityCheck = (e) => {
        /*
        let validity = "";
        if (!/^\d+$/.test(e.target.value)) {
            validity = "Number Only";
        } else if (0 >= parseInt(e.target.value)) {
            validity = "Out of Range";
        } else if (
            parseInt(e.target.value) >=
            Count.values.current.length + 1
        ) {
            validity = "Out of Range";
        }
        e.target.setCustomValidity(validity);
        */
    }; 

    const DisplayNavigation = (state, action) => {
        switch (action) {
            case "PMAX":
                state.num = 1;
                break;
            case "PONE":
                state.num -= 1;
                break;
            case "NONE":
                state.num += 1;
                break;
            case "NMAX":
                state.num = state.max;
                break;
            default:
                alert("error");
                break;
        }
        state.value = Count.values.current[state.num - 1];
        state.prev = state.num <= 1 ? false : true;
        state.next = state.num >= state.max ? false : true;
        forceUpdate(); // NON-IDEAL BUT WHATEVER
        console.log(state);
        return state;
    };
    const [, forceUpdate] = useReducer((x) => x + 1, 0); // NON-IDEAL BUT WHATEVER
    const [page, pagenav] = useReducer(DisplayNavigation, Count.page.current);
    return {
        Mode,
        values,
        toggleMode,
        submitValue,
        sanityCheck,
        page,
        pagenav,
    };
};

export default useInput;
