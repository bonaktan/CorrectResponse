import {useState} from "react"

const Counter = (items) => {
    const [values, setValues] = useState(new Array(items).fill(0))

    const submitValue = (num) => { 
        let temp = values
        temp[num-1] += 1
        setValues(temp) 
    }
    return {values, submitValue}
} 

export default Counter;
