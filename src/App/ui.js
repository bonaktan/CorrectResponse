import {useEffect, useState} from "react"
import {Instance, Count, Update, DisplayPage} from "./app.js"

export function Navbar({Mode, setMode}) { return (
    <div className="NavbarRoot">
        <div>Correct Responser</div>
        <button>Settings</button> {/* TODO: Popup sa Settings */}
        <div><button onClick={() => {setMode(!Mode)}}>Switch</button></div>
    </div>
);}

export function Table() { // BUG HERE
    // function handleSubmit(e)
    return (
        <div className="TablecountRoot">
            <form className="TablecountInput" onSubmit={(e) => {Update(e)} }>
                <input id="TablecountInputText" placeholder="Number" title="test" type="number"></input>
                <input type="submit" id="TablecountInputButton"/>
            </form>
            <div className="TablecountTable"><Tablecell/></div>
        </div>
    ); // TODO: LAYOUTING.
}

export function Tablecell() {
    // ig is, may initial mode and siguro lifetime shits?
    let cache = []
    for (let i = 1; i <= Count.items.length; i++) {
        cache.push(<p>{i}. {Count.items[i-1]}</p>)
    }
    return <>{cache}</>
}

export function Display() { // there has to be a better implementation of this thing
    const Number= useState(1)
    const Value = useState(Count.items[Number[0]-1])
    const Page = useState(Number[0] + '/50')
    return (
        <div className='DisplayRoot'>
            <div className='DisplayNavbar'>
                <div>
                    <button id="DisplayNavbarPMax" onClick={() => DisplayPage(Number, Value, Page, "pmax")}>&lt;&lt;</button>
                    <button id="DisplayNavbarPOne" onClick={() => DisplayPage(Number, Value, Page, "pone")}>&lt;</button>
                </div>
                <div><p id="DisplayReference">{Page[0]}</p></div>
                <div>
                    <button id="DisplayNavbarNOne" onClick={() => DisplayPage(Number, Value, Page, "none")}>&gt;</button>
                    <button id="DisplayNavbarNMax" onClick={() => DisplayPage(Number, Value, Page, "nmax")}>&gt;&gt;</button>
                </div>
            </div>
            <h1 id="DisplayNumber">{Value[0]}</h1>
        </div>
    )
}