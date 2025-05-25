import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(  
  // Getting access to that div tag with id = 'root' in index.html
  // Since that is the entry point to our app and this is how we are going to populate it
  <StrictMode>
    <App />
  </StrictMode>,
)
