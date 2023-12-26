import React from 'react';
import ReactDOM from 'react-dom/client';

import Counter from "./counter.js"
import './index.css';
import { Navbar, Tablecount } from "./baseApp.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
// Start shits
root.render(
  <>
    <Navbar />
    <div className="main">
      <Tablecount items="50"/>
    </div>
  </>
);