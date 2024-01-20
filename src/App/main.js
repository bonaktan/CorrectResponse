// Globals
import {useState} from "react"
import {Navbar, Display, Table} from './ui.jsx'



const useInput = () => {
    const [Mode, setMode] = useState(false) // true = display, false = display
    return [ Mode ]
}




export default useInput;