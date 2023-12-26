export function Navbar() { return (
    <nav className="NavbarRoot">
        <ul className="NavbarList">
            <li>Correct Responser</li>
            <li>Settings</li> {/* TODO: Popup sa Settings, AAAAA BAT AKO NAGLIPAT
            NG FRAMEWORK. */}
        </ul>
    </nav>
);}

export function Tablecount(props) { return (<div className="TablecountRoot"></div>); }

export function TablecountCell(props) { return (
    <p>{props.number}. {props.count}</p>
);}