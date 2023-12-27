import React from 'react';
import ReactDOM from 'react-dom/client';

import Counter from "./counter.js"
import './index.css';
import { Navbar, Tablecount } from "./baseApp.js"

// Globals
var Count = new Counter(50); // by default yung 50, can be changed
var DisplayState = 0; // 0 = Table, 1 = Display
const root = ReactDOM.createRoot(document.getElementById('root'));
function init() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<><Navbar root={root}/><div className="main"><Tablecount Count={Count}/></div></>);

}

function MainSwap() {
  const lookuptable = ["TablecountRoot", "DisplayRoot"];
  
  const main = 
}

init()