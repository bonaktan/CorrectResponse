// Globals
import React, {createContext, useContext, useState} from "react"
import { createRoot } from "react-dom/client"
// Locals
import {Navbar, Table, Display, Tablecell } from "./ui.js"
import Counter from "./counter.js"

// GlobalVars
export const Instance = createContext(null);
export const Count = new Counter(50);

export function App() {
    // originally here
    const [Mode, setMode] = useState(MODES.Table)

    return (
        <>
            <Navbar Mode={Mode} setMode={setMode}/>
            <Main Mode={Mode}/>
        </>
    )
}

function Main(props) { return (props.Mode) ? <Display/> : <Table/>}
export function Update(e) {
    e.preventDefault()
    Count.Submit(parseInt(e.target[0].value))
    // TODO: there has to be a more proper way to implement this thing
    let table = createRoot(document.getElementsByClassName("TablecountTable")[0])
    table.render(<Tablecell/>)
}
const MODES = {Table: false, Display: true};