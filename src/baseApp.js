export function Navbar(props) {
    return (
    <nav className="NavbarRoot">
        <ul className="NavbarList">
            <li>Correct Responser</li>
            <li id="NavbarGap"></li>
            <li className="NavbarSettings">Settings</li> {/* TODO: Popup sa Settings, AAAAA BAT AKO NAGLIPAT
            NG FRAMEWORK. */}
            <li><button>SWITCH</button></li>
        </ul>
    </nav>
);}

export function Tablecount({Count}) {
    const TablecountCell= (props) => <p>{props.number}. {props.count}</p> 
    let template = <div className="TablecountRoot">tite</div>;
    template = [...Array(parseInt(Count.items)),].map((value, index) => (
            <TablecountCell number={index + 1} count={index} />));
    return (
        <div className="TablecountRoot">
            <div className="TablecountInput">
                <input id="TablecountInputText" placeholder="Text"></input>
                <button id="TablecountInputButton">Submit</button>
            </div>
            {template}
        </div>
    ); // TODO: LAYOUTING.
}
