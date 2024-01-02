import * as React from 'react'
import ReactDOM from 'react-dom/client'

import Counter from './App.js'
function init() {
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<Counter items={50} />)
}

init()