import { useRef } from "react";

const Counter = (items) => {
    const values = useRef(new Array(items).fill(0));
    const page = useRef({
        prev: false,
        next: true,
        num: 1,
        max: values.current.length,
        value: values.current[0],
    });
    const submitValue = (input) => {
        // this thing has been sanitychecked already
        // we will go regex-style bit custom and less efficient (ig)

        // Flag for Addition/Subtraction
        let isSubtract = input[0] === "-"; // flag to check if we shall add or not
        if (isSubtract) {
            input = input.substring(1);
        }

        // Flag for Ranged Inputs
        input = input.split("-")
        let isRanged = input.length === 2 // TODO implement shit
    };
    return { values, submitValue, page };
};

export default Counter;
