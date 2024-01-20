import useInput from "./main.js"

const CorrectResponser = () => {
    const { Mode } = useInput()
    const Navbar = () => { return (
        <>
        <p>Correct Responser</p>
        <button>Swap</button>
    )}

    const Table = () => { return (
        <p>Table</p>
    )}

    const Display = () => { return (
        <p>Display</p>
    )}

    return (
        <>
            <Navbar/>
            { ( Mode ) ? <Display/> : <Table/> }
        </>
    )
}

export default CorrectResponser;