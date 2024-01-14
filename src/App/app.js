// Globals
import React, {createContext, useContext, useState} from "react"

// Locals
import {Navbar, Table, Display} from "./ui.js"
import Counter from "./counter.js"

export const Instance = createContext(null);
export function App() {
    const Count = new Counter(50);
    const [Mode, setMode] = useState(MODES.Table)
    return (
        <Instance.Provider value={{Count: Count,}}>
            <Navbar/>
            <Table/>
        </Instance.Provider>
    )
}

const MODES = {Table: false, Display: true};