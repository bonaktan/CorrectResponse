import ReactDOM from 'react-dom/client';

export function Navbar({count}) {
    var state=1;
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
    let template = [...Array(parseInt(Count.items)),].map((value, index) => (
            <TablecountCell number={index+1} count={Count.value[index]} />));
    return (
        <div className="TablecountRoot">
            <form className="TablecountInput" onSubmit={Count.Update}>
                <input id="TablecountInputText" placeholder="Number" title="test" 
                onInvalid={Count.inputSanity} onInput={Count.inputSanity} type="number"></input>
                <input type="submit" id="TablecountInputButton"/>
            </form>
            {template}
        </div>
    ); // TODO: LAYOUTING.
}

export function Display({Count}) {
    
    return <p>tite</p>
}