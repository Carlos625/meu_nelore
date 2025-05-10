import { useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError() as any
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Erro!</h1>
        <p className="text-lg text-gray-700 mb-2">Ocorreu um problema ao carregar a página.</p>
        {error?.status && (
          <p className="text-gray-500 mb-2">Código do erro: <span className="font-mono">{error.status}</span></p>
        )}
        {error?.statusText && (
          <p className="text-gray-500 mb-2">{error.statusText}</p>
        )}
        {error?.data && (
          <pre className="bg-gray-50 p-2 rounded text-xs text-gray-600 overflow-x-auto mb-2">{error.data}</pre>
        )}
        <Link to="/" className="mt-4 inline-block px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">Voltar para o início</Link>
      </div>
    </div>
  )
} 