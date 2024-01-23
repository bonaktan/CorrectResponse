// Globals
import { useReducer, useState, useRef } from "react";

import Counter from "./data.js";
import { Tablecells } from "./helpers.js";

const useInput = () => {
    const Count = Counter(50); // default is 50
    const [Mode, setMode] = useState(false); // true = display, false = display
    const [values, setValues] = useState(Tablecells(Count.values.current));
    const toggleMode = () => {
        setMode(!Mode);
    };
    const commands = useRef([])
    const submitValue = (e) => {
        let input = e.target[0].value
        e.preventDefault();
        let isUndo = input === "."
        if (isUndo) {
            input = commands.current.pop()
            input = (input[0] === "-") ? input.substring(1) : "-" + input
        }
        else { commands.current.push(input) }
        Count.submitValue(input);
        setValues(Tablecells(Count.values.current));
        document.getElementById("TableInput").focus()
        
    };
    const sanityCheck = (e) => {
        
        let validity = "";
        let input = e.target.value
        // maybe go for a full regex on this one
        if (input[0] === "-") { input = input.substring(1) }
        
        if (!/(^\.$)|(^\d+(-\d+$)?$)/g.test(input)) {
            e.target.setCustomValidity("Invalid Input"); return; // efficiency 
        }
        
        if (input === ".") {
            console.log(commands.current)
            if (commands.current.length <= 0) { validity = "No Undo Available" }
            e.target.setCustomValidity(validity); return
        }
        input = input.split("-").map(val => parseInt(val))
        if (input.length == 2) { // Ranged Jalues
            if (!(input[0] < input[1])) { validity = "First Value should be less than Second Value" }
            else if (!((1 <= input[0]) && (input[0] <= page.max))) { validity = "First Value Out of Range"}
            else if (!((1 <= input[1]) && (input[1] <= page.max))) { validity = "Second Value Out of Range" }
        }
        else {
            if (!((1 <= input[0]) && (input[0] <= page.max))) { validity = "Out of Range" }
        }
        e.target.setCustomValidity(validity);
        
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
