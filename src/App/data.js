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
        
        // Flag for Addition/Subtraction
        let isSubtract = input[0] === "-"; // flag to check if we shall add or not
        if (isSubtract) {
            input = input.substring(1);
        }

        // Flag for Ranged Inputs
        input = input.split("-")
        if (input.length === 2) { // Range of Values Input
            for (let i=input[0]; i<=input[1]; i++) {
                isSubtract ? values.current[i-1] -= 1 : values.current[i-1] += 1
            }
        }
        else { // Captures Number-only
            isSubtract ? values.current[input[0]-1] -= 1 : values.current[input[0]-1] += 1
        }

    };
    return { values, submitValue, page };
};

export default Counter;
