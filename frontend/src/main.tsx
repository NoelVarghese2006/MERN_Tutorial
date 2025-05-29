import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
          <Toaster richColors />
          <style>{`
            .sonner-toast--success {
              background-color: #2d6a4f !important; /* your custom green */
              color: white !important;
            }
            .sonner-toast--error {
              background-color: #9b2226 !important; /* your custom red */
              color: white !important;
            }
          `}</style>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
