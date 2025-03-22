export default function Header({toggleDisplayMode}) {
    return (
        <div className="flex flex-grow-0 flex-shrink-0 justify-evenly">
            <p>Correct Response</p>
            <button onClick={toggleDisplayMode}>test</button>
        </div>
    )
}