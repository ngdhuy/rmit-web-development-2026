//  import React component
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import SASS file
import './index.sass'

// import component
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
