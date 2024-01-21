import useInput from "./main.js"

const CorrectResponser = () => {
    const { Mode, values,
            toggleMode, submitValue } = useInput()
    const Navbar = () => { return (
        <>
            <p>Correct Responser</p>
            <button onClick={toggleMode}>Swap</button>
        </>
    )}

    const Table = () => { return (
        <>
            <form onSubmit={submitValue}>
                <input></input>
                <button type="submit">Submit</button>
            </form>
            <p>{values}</p>
        </>

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
