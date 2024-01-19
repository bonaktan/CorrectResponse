import {useEffect, useState} from "react"
import {Instance, Count, Update} from "./app.js"

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
    return (
        <div className='DisplayRoot'>
            <div className='DisplayNavbar'>
                <div>
                    <button id="DisplayNavbarPMax">&lt;&lt;</button>
                    <button id="DisplayNavbarPOne">&lt;</button>
                </div>
                <div><p id="DisplayReference">Count.displayNumber/Count.items</p></div>
                <div>
                    <button id="DisplayNavbarNOne">&gt;</button>
                    <button id="DisplayNavbarNMax">&gt;&gt;</button>
                </div>
            </div>
            <h1 id="DisplayNumber">Count.displayValue</h1>
        </div>
    )
}