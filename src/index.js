import * as React from 'react'
import ReactDOM from 'react-dom/client'

import CorrectResponser from "./App/ui.jsx"
function init() {
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<CorrectResponser/>)
}
init()