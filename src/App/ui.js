export function Navbar() { return (
    <div className="NavbarRoot">
        <div>Correct Responser</div>
        <button>Settings</button> {/* TODO: Popup sa Settings */}
        <div><button>Switch</button></div>
    </div>
);}

export function Table() { // BUG HERE
    return (
        <div className="TablecountRoot">
            <form className="TablecountInput">
                <input id="TablecountInputText" placeholder="Number" title="test" type="number"></input>
                <input type="submit" id="TablecountInputButton"/>
            </form>
            <div className="TablecountTable">AAAAAAAAAAAA</div>
        </div>
    ); // TODO: LAYOUTING.
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