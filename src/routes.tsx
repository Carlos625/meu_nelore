import { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'
import React from 'react'
import RequireAuth from './components/RequireAuth'
import Login from './pages/Login'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const AnimalList = lazy(() => import('./pages/AnimalList'))
const AnimalFormPage = lazy(() => import('./pages/AnimalFormPage').then(module => ({ default: module.AnimalFormPage })))
const AnimalDetails = lazy(() => import('./pages/AnimalDetails'))
const IncidentList = lazy(() => import('./pages/IncidentList'))
const IncidentForm = lazy(() => import('./pages/IncidentForm'))
const IncidentDetails = lazy(() => import('./pages/IncidentDetails'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Dashboard />
          </Suspense>
        )
      },
      {
        path: 'animais',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <AnimalList />
              </Suspense>
            )
          },
          {
            path: 'novo',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <AnimalFormPage />
              </Suspense>
            )
          },
          {
            path: ':id/editar',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <AnimalFormPage />
              </Suspense>
            )
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <AnimalDetails />
              </Suspense>
            )
          }
        ]
      },
      {
        path: 'incidentes',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <IncidentList />
              </Suspense>
            )
          },
          {
            path: 'novo',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <IncidentForm />
              </Suspense>
            )
          },
          {
            path: ':id/editar',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <IncidentForm />
              </Suspense>
            )
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <IncidentDetails />
              </Suspense>
            )
          }
        ]
      },
      {
        path: 'vacinas',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                {React.createElement(lazy(() => import('./pages/VacinaList')))}
              </Suspense>
            )
          },
          {
            path: 'nova',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                {React.createElement(lazy(() => import('./pages/VacinaForm')))}
              </Suspense>
            )
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  }
] 