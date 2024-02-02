import React from "react"

import { switchDisplayMode } from "../main.js"
const Navbar = () => { return (
    <div className="flex flex-row items-center text-center">
        <div className="basis-1/2 text-xl">Correct Response</div>
        <div className="basis-1/2">
            <button className="mr-2">Settings</button>
            <button className="ml-2" onClick={switchDisplayMode}>Switch</button>
        </div>
    </div>
)}

export default Navbar