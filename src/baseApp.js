import React from 'react';
import ReactDOM from 'react-dom/client';

export function Navbar({count}) {
    var state=0;
    function MainViewSwitch() {
        let main = ReactDOM.createRoot(document.getElementsByClassName("Main")[0])
        main.render((state===0) ? <Tablecount Count={count}/> : <Display Count={count} />)
        state = (state===0) ? 1 : 0
    }

    return (
    <nav className="NavbarRoot">
        <ul className="NavbarList">
            <li>Correct Responser</li>
            <li id="NavbarGap"></li>
            <li className="NavbarSettings">Settings</li> {/* TODO: Popup sa Settings, AAAAA BAT AKO NAGLIPAT
            NG FRAMEWORK. */}
            <li><button onClick={MainViewSwitch}>SWITCH</button></li>
        </ul>
    </nav>
);}

export function Tablecount({Count}) { // BUG HERE
    const TablecountCell = (props) => <p>{props.number}. {props.count}</p> 
    //let template = [...Array(parseInt(Count.items)),].map((value, index) => (
    //        <TablecountCell number={index+1} count={Count.value[index]} />));
    let template = () => [...Array(parseInt(Count.items)),].map((value, index) => (
            <TablecountCell number={index+1} count={Count.value[index]} />));
    function UpdateTable(e) {
        e.preventDefault()
        Count.Update(e)
        let TablecountTable = ReactDOM.createRoot(document.getElementsByClassName("TablecountTable")[0])
        TablecountTable.render(template())
    }
    return (
        <div className="TablecountRoot">
            <form className="TablecountInput" onSubmit={UpdateTable}>
                <input id="TablecountInputText" placeholder="Number" title="test" 
                onInvalid={Count.inputSanity} onInput={Count.inputSanity} type="number"></input>
                <input type="submit" id="TablecountInputButton"/>
            </form>
            <div className="TablecountTable">{template()}</div>
        </div>
    ); // TODO: LAYOUTING.
}

export function Display({Count}) { // there has to be a better implementation of this thing
    Count.displayNumber = 1;
    function prevMax() {Count.displayNumber = 1; updateDisplay()}
    function prevOne() {Count.displayNumber = Count.displayNumber-1; updateDisplay()}
    function nextOne() {Count.displayNumber = Count.displayNumber+1; updateDisplay()}
    function nextMax() {Count.displayNumber = Count.items; updateDisplay()}
    function updateDisplay() { // BUG: 1/50 going white then dark sa start
        let ref = ReactDOM.createRoot(document.getElementById("DisplayReference"))
        ref.render(Count.displayNumber + '/' + Count.items)
        let num = ReactDOM.createRoot(document.getElementById("DisplayNumber"))
        num.render(Count.displayValue)
        document.getElementById('DisplayNavbarPMax').disabled = (Count.displayNumber <= 1) ? true : false;
        document.getElementById('DisplayNavbarPOne').disabled = (Count.displayNumber <= 1) ? true : false;
        document.getElementById('DisplayNavbarNOne').disabled = (Count.displayNumber >= Count.items) ? true : false;
        document.getElementById('DisplayNavbarNMax').disabled = (Count.displayNumber >= Count.items) ? true : false;
    }
    return (
        <div className='DisplayRoot'>
            <div className='DisplayNavbar'>
                <div>
                    <button id="DisplayNavbarPMax" onClick={prevMax}>&lt;&lt;</button>
                    <button id="DisplayNavbarPOne" onClick={prevOne}>&lt;</button>
                </div>
                <div><p id="DisplayReference">{Count.displayNumber}/{Count.items}</p></div>
                <div>
                    <button id="DisplayNavbarNOne" onClick={nextOne}>&gt;</button>
                    <button id="DisplayNavbarNMax" onClick={nextMax}>&gt;&gt;</button>
                </div>
            </div>
            <h1 id="DisplayNumber">{Count.displayValue}</h1>
        </div>
    )
}