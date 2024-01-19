import { createRoot } from 'react-dom/client';

import './index.css';
import { App } from "./App/app.js"
import { StrictMode } from 'react';

function init() { const root = createRoot(document.getElementById('root')); root.render(<StrictMode><App /></StrictMode>);}; init()