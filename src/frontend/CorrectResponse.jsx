import useCorrectResponse from "../backend/useCorrectResponse";

import Header from "./Header";
import InputField from "./InputField";
import TableView from "./TableView";
import DisplayView from "./DisplayView";

export default function CorrectResponse() {
    const correctResponseState = useCorrectResponse();
    return (
        <div className="flex flex-col h-dvh">
            <Header toggleDisplayMode={correctResponseState.toggleDisplayMode} />
            <InputField/>
            <div className="flex-grow flex-shrink-0">
                {correctResponseState.displayMode ? 
                    <TableView/>: 
                    <DisplayView/>}
            </div>
        </div>
    );
}
