import useInput from "./main.js";

const CorrectResponser = () => {
    const {
        Mode,
        values,
        toggleMode,
        submitValue,
        sanityCheck,
        error,
        page,
        pagenav,
    } = useInput();
    const Navbar = () => {
        return (
            <>
                <div>
                    <p>Correct Responser</p>
                    <button onClick={toggleMode}>Swap</button>
                </div>
            </>
        );
    };

    const Table = () => {
        return (
            <>
                <form onSubmit={submitValue}>
                    <input onChange={sanityCheck} onInvalid={error}></input>
                    <button type="submit">Submit</button>
                </form>
                <div>{values}</div>
            </>
        );
    };

    const Display = () => {
        return (
            <>
                <span>
                    <button
                        onClick={() => pagenav("PMAX")}
                        disabled={!page.prev}>
                        &lt;&lt;
                    </button>
                    <button
                        onClick={() => pagenav("PONE")}
                        disabled={!page.prev}>
                        &lt;
                    </button>
                    <p>
                        {page.num}/{page.max}
                    </p>
                    <button
                        onClick={() => pagenav("NONE")}
                        disabled={!page.next}>
                        &gt;
                    </button>
                    <button
                        onClick={() => pagenav("NMAX")}
                        disabled={!page.next}>
                        &gt;&gt;
                    </button>
                </span>
                <p>{page.value}</p>
            </>
        );
    };

    return (
        <>
            <Navbar />
            {Mode ? <Display /> : <Table />}
        </>
    );
};

export default CorrectResponser;
