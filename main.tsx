import React from 'react'
import ReactDOM from 'react-dom/client'
import EchoApp from './echo_companion_ui.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EchoApp />
  </React.StrictMode>,
)