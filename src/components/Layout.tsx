import { Outlet, Link, useLocation } from 'react-router-dom'
import { FaHome, FaExclamationTriangle, FaBars, FaTimes } from 'react-icons/fa'
import { FaCow, FaSyringe } from 'react-icons/fa6'
import { useState } from 'react'

const Layout = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              >
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
              <h1 className="ml-4 text-2xl font-bold text-gray-900">Meu Nelore</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar - Mobile */}
            {isMenuOpen && (
              <div className="md:hidden mb-4">
                <nav className="bg-white shadow rounded-lg p-4">
                  <Link
                    to="/"
                    className={`flex items-center px-4 py-2 text-base font-medium rounded-md ${
                      isActive('/')
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaHome className="mr-4 h-6 w-6" />
                    Dashboard
                  </Link>

                  <Link
                    to="/animais"
                    className={`mt-1 flex items-center px-4 py-2 text-base font-medium rounded-md ${
                      isActive('/animais')
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaCow className="h-5 w-5 mr-2" />
                    Animais
                  </Link>

                  <Link
                    to="/incidentes"
                    className={`mt-1 flex items-center px-4 py-2 text-base font-medium rounded-md ${
                      isActive('/incidentes')
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaExclamationTriangle className="mr-4 h-6 w-6" />
                    Incidentes
                  </Link>

                  <Link
                    to="/vacinas"
                    className={`mt-1 flex items-center px-4 py-2 text-base font-medium rounded-md ${
                      isActive('/vacinas')
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaSyringe className="h-5 w-5 mr-2" />
                    Vacinas
                  </Link>
                </nav>
              </div>
            )}

            {/* Sidebar - Desktop */}
            <div className="hidden md:block w-64 bg-white shadow rounded-lg mr-6">
              <nav className="mt-5 px-2">
                <Link
                  to="/"
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    isActive('/')
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <FaHome className="mr-4 h-6 w-6" />
                  Dashboard
                </Link>

                <Link
                  to="/animais"
                  className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    isActive('/animais')
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <FaCow className="h-5 w-5 mr-2" />
                  Animais
                </Link>

                <Link
                  to="/incidentes"
                  className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    isActive('/incidentes')
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <FaExclamationTriangle className="mr-4 h-6 w-6" />
                  Incidentes
                </Link>

                <Link
                  to="/vacinas"
                  className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    isActive('/vacinas')
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <FaSyringe className="h-5 w-5 mr-2" />
                  Vacinas
                </Link>
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout 