import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { BrowserRouter as Router } from "react-router-dom";


function ColorfulBorder() {
  return (
    <ul className='border-container'>
      <li className='border-item' style={{ background: 'var(--red)' }} />
      <li className='border-item' style={{ background: 'var(--blue)' }} />
      <li className='border-item' style={{ background: 'var(--pink)' }} />
      <li className='border-item' style={{ background: 'var(--yellow)' }} />
      <li className='border-item' style={{ background: 'var(--aqua)' }} />
    </ul>
  )
}

ReactDOM.render(
  <Router>
    <ColorfulBorder />
    <App />
  </Router>,
  document.getElementById('root')
)