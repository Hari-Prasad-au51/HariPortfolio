import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom' // ✅ Change here


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter> {/* ✅ Replace BrowserRouter with HashRouter */}
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
