import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { AppRouter } from './router/AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ createBrowserRouter(AppRouter) } />
  </StrictMode>,
)
