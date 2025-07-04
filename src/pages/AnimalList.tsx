import { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { getAnimais } from '../services/firestore'
import { Animal } from '../types'
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { FaCow } from 'react-icons/fa6'
import LoadingSpinner from '../components/LoadingSpinner'

const ITEMS_PER_PAGE = 10

export default function AnimalList() {
  const [animais, setAnimais] = useState<Animal[]>([])
  const [loading, setLoading] = useState(true)
  const [busca, setBusca] = useState('')
  const [filtroStatus, setFiltroStatus] = useState<Animal['status'] | 'todos'>('todos')
  const [dataInicial, setDataInicial] = useState('')
  const [dataFinal, setDataFinal] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const statusUrl = searchParams.get('status')?.toLowerCase()
    if (statusUrl && ['ativo', 'vendido', 'abatido', 'morto'].includes(statusUrl)) {
      setFiltroStatus(statusUrl as Animal['status'])
    }

    loadData()
  }, [searchParams])

  async function loadData() {
    try {
      setLoading(true)
      const data = await getAnimais()
      setAnimais(data)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  const coresBrinco = [
    { id: 'amarelo', nome: 'Amarelo', cor: 'bg-yellow-400' },
    { id: 'verde', nome: 'Verde', cor: 'bg-green-500' },
    { id: 'azul', nome: 'Azul', cor: 'bg-blue-500' },
    { id: 'vermelho', nome: 'Vermelho', cor: 'bg-red-500' }
  ]

  const coresStatus = [
    { id: 'ativo', nome: 'Ativo', cor: 'bg-green-500' },
    { id: 'vendido', nome: 'Vendido', cor: 'bg-blue-500' },
    { id: 'abatido', nome: 'Abatido', cor: 'bg-red-500' },
    { id: 'morto', nome: 'Morto', cor: 'bg-gray-500' }
  ]

  const animaisFiltrados = animais.filter(animal => {
    if (!animal) return false

    const numeroBrinco = String(animal.numeroBrinco || '')
    const raca = typeof animal.raca === 'string' ? animal.raca.toLowerCase() : ''
    const buscaLower = busca.toLowerCase()
    const matchBusca = numeroBrinco.includes(busca) || raca.includes(buscaLower)
    const matchStatus = filtroStatus === 'todos' || animal.status === filtroStatus

    let dataEntrada: Date
    try {
      if (animal.dataEntrada instanceof Date) {
        dataEntrada = animal.dataEntrada
      } else if (animal.dataEntrada?.toDate) {
        dataEntrada = animal.dataEntrada.toDate()
      } else if (typeof animal.dataEntrada === 'string') {
        dataEntrada = new Date(animal.dataEntrada)
      } else {
        dataEntrada = new Date()
      }
    } catch {
      dataEntrada = new Date()
    }

    const afterStart = !dataInicial || dataEntrada >= new Date(dataInicial)
    const beforeEnd = !dataFinal || dataEntrada <= new Date(dataFinal)

    return matchBusca && matchStatus && afterStart && beforeEnd
  })

  const totalPages = Math.ceil(animaisFiltrados.length / ITEMS_PER_PAGE)
  const animaisPaginados = animaisFiltrados.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  function handleStatusChange(status: string) {
    setFiltroStatus(status as Animal['status'] | 'todos')
    setCurrentPage(1)

    const params = new URLSearchParams(window.location.search)
    if (status === 'todos') {
      params.delete('status')
    } else {
      params.set('status', status)
    }
    navigate({ search: params.toString() }, { replace: true })
  }

  function handlePageChange(page: number) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  if (loading) return <LoadingSpinner />

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <div className="flex items-center">
          <FaCow className="h-8 w-8 text-primary-600 mr-3" />
          <h1 className="text-2xl font-semibold text-gray-900">Animais</h1>
        </div>
        <Link
          to="/animais/novo"
          className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Novo Animal
        </Link>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={busca}
              onChange={(e) => { setBusca(e.target.value); setCurrentPage(1) }}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md sm:text-sm"
              placeholder="Buscar por brinco ou raça"
            />
          </div>
        </div>
        <div className="w-full sm:w-48">
          <select
            value={filtroStatus}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 sm:text-sm rounded-md"
          >
            <option value="todos">Todos os Status</option>
            <option value="ativo">Ativos</option>
            <option value="vendido">Vendidos</option>
            <option value="abatido">Abatidos</option>
            <option value="morto">Mortos</option>
          </select>
        </div>
        <div className="flex justify-center gap-2 items-end mt-2">
          <div>
            <label className="block text-xs font-medium text-gray-700">Data inicial</label>
            <input
              type="date"
              value={dataInicial}
              onChange={e => { setDataInicial(e.target.value); setCurrentPage(1) }}
              className="block w-full px-2 py-2 border border-gray-300 rounded-md text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">Data final</label>
            <input
              type="date"
              value={dataFinal}
              onChange={e => { setDataFinal(e.target.value); setCurrentPage(1) }}
              className="block w-full px-2 py-2 border border-gray-300 rounded-md text-xs"
            />
          </div>
          <div>
            <p className="text-xs text-gray-500">Total de animais: {animaisFiltrados.length}</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {animaisPaginados.map((animal) => (
            <li key={animal.id}>
              <Link to={`/animais/${animal.id}`} className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {animal.foto ? (
                        <img src={animal.foto} alt={`Animal ${animal.numeroBrinco}`} className="h-12 w-12 rounded-full object-cover" />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-lg font-medium">{animal.numeroBrinco}</span>
                        </div>
                      )}
                      <div className="ml-4">
                        <p className="text-sm font-medium text-primary-600 flex items-center gap-2">
                          Brinco {animal.numeroBrinco}
                          <span className={`inline-block w-3 h-3 rounded-full ${
                            coresBrinco.find(cor => cor.id === animal.corBrinco)?.cor || 'bg-gray-300'
                          }`} title={animal.corBrinco}></span>
                          <span className="text-xs text-gray-500 capitalize">
                            {coresBrinco.find(cor => cor.id === animal.corBrinco)?.nome || ''}
                          </span>
                        </p>
                        <p className="text-sm text-gray-500">{animal.raca || ''}</p>
                      </div>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        coresStatus.find(cor => cor.id === animal.status.toLowerCase())?.cor || 'bg-gray-300'
                      }`}>
                        {coresStatus.find(cor => cor.id === animal.status.toLowerCase())?.nome || 'Status Desconhecido'}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm border rounded disabled:opacity-50"
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 text-sm border rounded ${currentPage === i + 1 ? 'bg-primary-600 text-white' : ''}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm border rounded disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  )
}
