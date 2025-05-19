import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import APICall from './APICall'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APICall />
  </StrictMode>,
)
