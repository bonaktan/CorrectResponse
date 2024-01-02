import * as React from "react"
import ReactDOM from 'react-dom/client'
import { ToggleButton } from "@mui/material";
class Counter extends React.Component {
    constructor(props) { // idea is it takes item and maybe other params, oop mentals
        super(props);
        this.items = props.items;
    }
    render() { return ( // im thinking dito lahat ng ui bullshit eh
        <p>tite</p>
    );}
}

function Navbar(props) {
    const [selected, setSelected] = React.useState(false);
    return (
        <div className="NavbarRoot">
        <div>Correct Responser</div>
        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => { setSelected(!selected);
        }}>
            test
        </ToggleButton> {/* TODO: Popup sa Settings */}
        <div><button onClick={}>SWITCH</button></div>
    </div>
    )
}





export default Counter