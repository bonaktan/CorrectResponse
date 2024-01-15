import {useContext, useEffect, useState} from "react"
import {Instance} from "./app.js"

export function Navbar({Mode, setMode}) { return (
    <div className="NavbarRoot">
        <div>Correct Responser</div>
        <button>Settings</button> {/* TODO: Popup sa Settings */}
        <div><button onClick={() => {setMode(!Mode)}}>Switch</button></div>
    </div>
);}

export function Table() { // BUG HERE
    const Submit = useContext(Instance).Submit;
    return (
        <div className="TablecountRoot">
            <form className="TablecountInput" onSubmit={Submit}>
                <input id="TablecountInputText" placeholder="Number" title="test" type="number"></input>
                <input type="submit" id="TablecountInputButton"/>
            </form>
            <div className="TablecountTable"><Tablecell/></div>
        </div>
    ); // TODO: LAYOUTING.
}

function Tablecell() {
    const Mode = useContext(Instance);
    let temp = null
    useEffect(() => {temp = update()}, [Mode.items])
    function update() {
        let template=[]
        for (let i=1; i<=Mode.items.length; i++) {
            template.push(<p>{i}. {Mode.items[i-1]}</p>)
        }
        alert("ran")
        return template
    }
    temp = update()
    return <>{temp}</>
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