import * as React from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM, * as ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App'
import './index.css'
import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'

// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<App />)
// 

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);