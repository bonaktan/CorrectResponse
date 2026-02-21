import { useReducer, useRef, useState } from "react";

export default function useCorrectResponse() {
    const [items, setItems] = useState(5);
    const [displayMode, toggleDisplayMode] = useReducer((state) => !state, true);
    const [count, updateCount] = useReducer((state, action) => state, new Array(items).fill(0));
    const elements = new Array(items).fill(useRef())
    const [displayNum, setDisplayCount] = useReducer((state, action) => state + 1, 1);    
    return { displayMode, toggleDisplayMode, count, updateCount, elements, displayNum, };
}
