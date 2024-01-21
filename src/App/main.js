// Globals
import {useState} from "react"

import Counter from "./data.js"

const useInput = () => {
    const Count = Counter(50) // default is 50
    const [Mode, setMode] = useState(false) // true = display, false = display
    const [values, setValues] = useState(Count.values)
    const toggleMode = () => { setMode(!Mode) }
    
    const submitValue = (e) => {
        e.preventDefault()
        Count.submitValue(parseInt(e.target[0].value))
        setValues(Count.values)
        alert(1)

    }

    return { Mode, values, toggleMode, submitValue, }
}




export default useInput;
