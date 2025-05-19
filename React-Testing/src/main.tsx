import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PropsTesting from './PropsTesting'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PropsTesting />
  </StrictMode>,
)
