import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllIncidentes, getAnimais } from '../services/firestore'
import { Incidente } from '../types/incidente'
import { Animal } from '../types/index'
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

// Utilitário para lidar com data Firebase
function converterParaDate(data: any): Date | null {
  if (!data) return null
  if (data instanceof Date) return data
  if (typeof data?.toDate === 'function') return data.toDate()
  if (typeof data.seconds === 'number') return new Date(data.seconds * 1000)
  return null
}

export default function IncidentList() {
  const [incidentes, setIncidentes] = useState<Incidente[]>([])
  const [animais, setAnimais] = useState<Animal[]>([])
  const [loading, setLoading] = useState(true)
  const [busca, setBusca] = useState('')
  const [filtroStatus, setFiltroStatus] = useState<Incidente['status'] | 'todos'>('todos')
  const [filtroTipo, setFiltroTipo] = useState<Incidente['tipo'] | 'todos'>('todos')

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setLoading(true)
      const [incidentesData, animaisData] = await Promise.all([
        getAllIncidentes(),
        getAnimais()
      ])

      setIncidentes(incidentesData as unknown as Incidente[])
      setAnimais(animaisData)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  const incidentesFiltrados = incidentes.filter(incidente => {
    const animal = animais.find(a => String(a.id) === String(incidente.animalId))
    const matchBusca = animal && (
      animal.numeroBrinco.toString().includes(busca) ||
      incidente.descricao.toLowerCase().includes(busca.toLowerCase())
    )
    const matchStatus = filtroStatus === 'todos' || incidente.status === filtroStatus
    const matchTipo = filtroTipo === 'todos' || incidente.tipo === filtroTipo
    return matchBusca && matchStatus && matchTipo
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Incidentes</h1>
        <Link
          to="/incidentes/novo"
          className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Novo Incidente
        </Link>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="col-span-2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              placeholder="Buscar por brinco ou descrição"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <select
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value as Incidente['status'] | 'todos')}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
          >
            <option value="todos">Todos os Status</option>
            <option value="pendente">Pendente</option>
            <option value="resolvido">Resolvido</option>
          </select>
          <select
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value as Incidente['tipo'] | 'todos')}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
          >
            <option value="todos">Todos os Tipos</option>
            <option value="doenca">Doença</option>
            <option value="acidente">Acidente</option>
            <option value="outro">Outro</option>
          </select>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {incidentesFiltrados.map((incidente) => {
            const animal = animais.find(a => a.id === incidente.animalId.toString())
            const dataFormatada = converterParaDate(incidente.data)?.toLocaleDateString('pt-BR') || 'Data inválida'
            return (
              <li key={incidente.id}>
                <Link to={`/incidentes/${incidente.id}`} className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {incidente.foto ? (
                          <img
                            src={incidente.foto}
                            alt="Foto do incidente"
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 text-lg font-medium">
                              {animal?.numeroBrinco || 'N/A'}
                            </span>
                          </div>
                        )}
                        <div className="ml-4">
                          <p className="text-sm font-medium text-primary-600">
                            Animal #{animal?.numeroBrinco || incidente.animalId} - {typeof incidente.tipo === 'string' 
                              ? incidente.tipo.charAt(0).toUpperCase() + incidente.tipo.slice(1)
                              : 'Tipo não informado'}
                          </p>
                          <p className="text-sm text-gray-500">{incidente.descricao || 'Sem descrição'}</p>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          incidente.status === 'resolvido'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {typeof incidente.status === 'string'
                            ? incidente.status === 'resolvido' ? 'Resolvido' : 'Pendente'
                            : 'Status Desconhecido'}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <p className="text-sm text-gray-500">{dataFormatada}</p>
                    </div>
                    {incidente.observacoes && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{incidente.observacoes}</p>
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
