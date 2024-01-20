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
    const [Mode, setMode] = useState(MODES.Display) // temp lang to
    return (
        <>
            <Navbar Mode={Mode} setMode={setMode}/>
            <Main Mode={Mode}/>
        </>
    )
}

function Main(props) { return (props.Mode) ? <Display/> : <Table/>}

export function Update(e) { // TODO: there has to be a more proper way to implement this thing
    e.preventDefault()
    Count.Submit(parseInt(e.target[0].value))
    let table = createRoot(document.getElementsByClassName("TablecountTable")[0])
    table.render(<Tablecell/>)
}
export function DisplayPage(Number, Value, Page, type) {
    console.log(type)
    switch(type) {
        case "pmax": Number[1](1); break;
        case "pone": Number[1](Number[0]-1); break; 
        case "none": Number[1](Number[0]+1); break;
        case "nmax": Number[1](Count.items.length); break;
    }
    Value[1](Count.items[Number[0]-1])
    Page[1](Number[0]+"/50")

}
const MODES = {Table: false, Display: true};