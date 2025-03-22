import { useReducer } from "react";

export default function useCorrectResponse() {
    const [displayMode, toggleDisplayMode] = useReducer((state) => !state, true)
    return {displayMode, toggleDisplayMode}
}