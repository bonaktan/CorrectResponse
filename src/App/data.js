import {useRef} from "react"

const Counter = (items) => {
    const values = useRef(new Array(items).fill(0))
    const page = useRef({ prev: false, next: true, num: 1, max: values.current.length, value: values.current[0]})
    const submitValue = (num) => { 
        values.current[num-1] += 1
        console.log(values)
    }
    return {values, submitValue, page}
} 

export default Counter;
