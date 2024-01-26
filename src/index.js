import ReactDOM from "react-dom/client";

import CorrectResponser from "./App/ui.jsx";
import "./index.css";

function init() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<CorrectResponser />);
}
init();
