import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import AnimalList from './pages/AnimalList'
import AnimalForm from './pages/AnimalForm'
import AnimalDetails from './pages/AnimalDetails'
import IncidentList from './pages/IncidentList'
import IncidentForm from './pages/IncidentForm'
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
        element: <AnimalForm />
      },
      {
        path: 'animais/:id',
        element: <AnimalDetails />
      },
      {
        path: 'animais/:id/editar',
        element: <AnimalForm />
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