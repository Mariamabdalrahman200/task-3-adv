import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root.tsx'
import AboutPage from './pages/AboutPage/AboutPage.tsx'
import AcademicPage from './pages/AcademicPage/AcademicPage.tsx'

const router=createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      // {
      //   path:"",
      //   element:<HomePage />
      // }
      {
        path:"about",
        element:<AboutPage />

      },
       {
        path:"academics",
        element:<AcademicPage />

      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
