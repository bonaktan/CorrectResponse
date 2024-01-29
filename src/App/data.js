import { useRef, useState, useReducer } from "react";

const Counter = (items) => {
    // TODO: this is having too much responsibilities
    const values = useRef(new Array(items).fill(17)); // TEMPORARY, FOR IMPLEMENTING SUBTRACT MODE
    const page = {
        prev: false,
        next: true,
        num: 1,
        max: values.current.length,
        value: values.current[0],
    };
    const [InputMode, setInputMode] = useState(false); // true = Add, false = Subtract
    const commands = useRef([]);
    const AddModeSubmit = (input) => {
        // this thing has been sanitychecked already

        let isSubtract = input[0] === "-";
        if (isSubtract) {
            input = input.substring(1);
        }

        input = input.split("-");
        if (input.length === 2) {
            // Range of Values Input
            for (let i = input[0]; i <= input[1]; i++) {
                isSubtract
                    ? (values.current[i - 1] -= 1)
                    : (values.current[i - 1] += 1);
            }
        } else {
            // Captures Number-only
            isSubtract
                ? (values.current[input[0] - 1] -= 1)
                : (values.current[input[0] - 1] += 1);
        }
    };
    const SubtractModeSubmit = (input) => {
        // this thing has been sanitychecked already

        let isAdd = input[0] === "-";
        if (isAdd) {
            input = input.substring(1);
        }

        input = input.split("-");
        if (input.length === 2) {
            // Range of Values Input
            for (let i = input[0]; i <= input[1]; i++) {
                isAdd
                    ? (values.current[i - 1] += 1)
                    : (values.current[i - 1] -= 1);
            }
        } else {
            // Captures Number-only
            isAdd
                ? (values.current[input[0] - 1] += 1)
                : (values.current[input[0] - 1] -= 1);
        }
    };

    const AddSanityCheck = (e) => { // theres still prolly a chance that we can merge add and subtract modes
        let validity = "";
        let input = e.target.value;
        let isSubtract = false;
        // maybe go for a full regex on this one
        if (input[0] === "-") {
            isSubtract = true;
            input = input.substring(1);
        }

        if (!/(^\.$)|(^\d+(-\d+$)?$)/g.test(input)) {
            e.target.setCustomValidity("Invalid Input");
            return; // efficiency
        }

        if (input === ".") {
            console.log(commands.current);
            if (commands.current.length <= 0) {
                validity = "No Undo Available";
            }
            e.target.setCustomValidity(validity);
            return;
        }
        input = input.split("-").map((val) => parseInt(val));
        if (input.length === 2) {
            // Ranged Values
            if (!(input[0] < input[1])) {
                validity = "First Value should be less than Second Value";
            } else if (!(1 <= input[0] && input[0] <= DisplayData.max)) {
                validity = "First Value Out of Range";
            } else if (!(1 <= input[1] && input[1] <= DisplayData.max)) {
                validity = "Second Value Out of Range";
            } else if (
                isSubtract &&
                values.current
                    .slice(input[0] - 1, input[1] - 1)
                    .some((n) => n <= 0)
            ) {
                validity = "Atleast 1 number is already 0";
            }
        } else {
            if (!(1 <= input[0] && input[0] <= DisplayData.max)) {
                validity = "Out of Range";
            } else if (isSubtract && values.current[input[0] - 1] <= 0) {
                validity = "Number is already 0";
            }
        }
        e.target.setCustomValidity(validity);
    };
    const SubtractSanityCheck = (e) => {
        let validity = "";
        let input = e.target.value;
        let isAdd = false;
        // maybe go for a full regex on this one
        if (input[0] === "-") {
            isAdd = true;
            input = input.substring(1);
        }

        if (!/(^\.$)|(^\d+(-\d+$)?$)/g.test(input)) {
            e.target.setCustomValidity("Invalid Input");
            return; // efficiency
        }

        if (input === ".") {
            console.log(commands.current);
            if (commands.current.length <= 0) {
                validity = "No Undo Available";
            }
            e.target.setCustomValidity(validity);
            return;
        }
        input = input.split("-").map((val) => parseInt(val));
        if (input.length === 2) {
            // Ranged Values
            if (!(input[0] < input[1])) {
                validity = "First Value should be less than Second Value";
            } else if (!(1 <= input[0] && input[0] <= DisplayData.max)) {
                validity = "First Value Out of Range";
            } else if (!(1 <= input[1] && input[1] <= DisplayData.max)) {
                validity = "Second Value Out of Range";
            } else if (
                !isAdd &&
                values.current
                    .slice(input[0] - 1, input[1] - 1)
                    .some((n) => n <= 0)
            ) {
                validity = "Atleast 1 number is already 0";
            }
        } else {
            if (!(1 <= input[0] && input[0] <= DisplayData.max)) {
                validity = "Out of Range";
            } else if (!isAdd && values.current[input[0] - 1] <= 0) {
                validity = "Number is already 0";
            }
        }
        e.target.setCustomValidity(validity);
    };


    const setDisplayData = (state, num) => {
        state.num = num;
        state.value = values.current[num - 1];
        state.prev = num <= 1 ? false : true;
        state.next = num >= state.max ? false : true;

        return state;
    };
    const [DisplayData, updateDisplayData] = useReducer(setDisplayData, page);
    return {
        values,
        AddModeSubmit,
        SubtractModeSubmit,
        AddSanityCheck,
        SubtractSanityCheck,
        InputMode,
        page,
        DisplayData,
        updateDisplayData,
        commands,
    };
};

export default Counter;
