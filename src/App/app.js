// Globals
import React, {createContext, useContext, useState} from "react"

// Locals
import {Navbar, Table, Display} from "./ui.js"
import Counter from "./counter.js"

export const Instance = createContext(null);
export function App() {
    const Count = new Counter(50);
    const [Mode, setMode] = useState(MODES.Table)
    const [items, updateItems] = useState(Count.items)
    function Submit(e) {
        e.preventDefault()
        Count.Submit(parseInt(e.target[0].value)-1)
        updateItems(!items)

    }
    return (
        <Instance.Provider value={{Count: Count, Submit: Submit, items: items, updateItems: updateItems}}>
            <Navbar Mode={Mode} setMode={setMode}/>
            <Main Mode={Mode}/>
        </Instance.Provider>
    )
}

function Main({Mode}) { return (Mode) ? <Display/> : <Table/> }

const MODES = {Table: false, Display: true};