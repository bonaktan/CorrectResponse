import React from 'react';
import ReactDOM from 'react-dom/client';

import Counter from "./counter.js"
import './index.css';
import { Navbar, Tablecount, Display} from "./baseApp.js"


function init() {
  const Count = new Counter(50)
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<><Navbar count={Count}/><div className='Main'><Display Count={Count}/></div></>); 
  // TEMPORARY YUNG DISPLAY, ALSO CHANGE BASEAPP line4
}


init()