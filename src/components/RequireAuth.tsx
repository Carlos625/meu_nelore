import { Navigate, useLocation } from 'react-router-dom'

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  const location = useLocation()
 
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
} 