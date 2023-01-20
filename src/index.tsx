import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css';
import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<App />)