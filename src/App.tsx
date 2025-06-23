import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import AnimalList from './pages/AnimalList'
import { AnimalFormPage } from './pages/AnimalFormPage'
import AnimalDetails from './pages/AnimalDetails'
import IncidentList from './pages/IncidentList'
import IncidentForm from './pages/IncidentPageForm'
import IncidentDetails from './pages/IncidentDetails'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'animais',
        element: <AnimalList />
      },
      {
        path: 'animais/novo',
        element: <AnimalFormPage />
      },
      {
        path: 'animais/:id',
        element: <AnimalDetails />
      },
      {
        path: 'animais/:id/editar',
        element: <AnimalFormPage />
      },
      {
        path: 'incidentes',
        element: <IncidentList />
      },
      {
        path: 'incidentes/novo',
        element: <IncidentForm />
      },
      {
        path: 'incidentes/:id',
        element: <IncidentDetails />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App 