import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getIncidentes, getAnimal, deleteIncidente } from '../services/firestore'
import { Animal, Incidente, IncidenteStatus, IncidenteTipo } from '../types'

export default function IncidentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [incidente, setIncidente] = useState<Incidente | null>(null)
  const [animal, setAnimal] = useState<Animal | null>(null)
  const [erro, setErro] = useState('')

  useEffect(() => {
    loadData()
  }, [id])

  async function loadData() {
    if (!id) return

    try {
      setLoading(true)
      const incidentes = await getIncidentes(id)
      const data = incidentes[0]
      if (data) {
        setIncidente(data)
        if (data.animalId) {
          const animalData = await getAnimal(data.animalId)
          if (animalData) {
            setAnimal(animalData)
          }
        }
      } else {
        setErro('Incidente não encontrado')
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
      setErro('Erro ao carregar dados do incidente')
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete() {
    if (!incidente) return

    if (window.confirm('Tem certeza que deseja excluir este incidente?')) {
      try {
        setLoading(true)
        await deleteIncidente(incidente.id)
        navigate('/incidentes')
      } catch (error) {
        console.error('Erro ao excluir incidente:', error)
        setErro('Erro ao excluir incidente')
        setLoading(false)
      }
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (erro || !incidente) {
    return (
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              {erro || 'Incidente não encontrado'}
            </h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Detalhes do Incidente
        </h1>
        <div className="flex space-x-3">
          <button
            onClick={() => navigate(`/incidentes/editar/${incidente.id}`)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Excluir
          </button>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Informações do Incidente
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {animal && (
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Animal</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="flex items-center">
                    {animal.foto ? (
                      <img
                        src={animal.foto}
                        alt={`Animal ${animal.numeroBrinco}`}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-lg font-medium">
                          {animal.numeroBrinco}
                        </span>
                      </div>
                    )}
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        Brinco {animal.numeroBrinco}
                      </p>
                      <p className="text-sm text-gray-500">{animal.raca}</p>
                    </div>
                  </div>
                </dd>
              </div>
            )}

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Tipo</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {incidente.tipo === IncidenteTipo.DOENCA && 'Doença'}
                {incidente.tipo === IncidenteTipo.FERIMENTO && 'Ferimento'}
                {incidente.tipo === IncidenteTipo.OUTRO && 'Outro'}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    incidente.status === IncidenteStatus.PENDENTE
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {incidente.status === IncidenteStatus.PENDENTE ? 'Pendente' : 'Resolvido'}
                </span>
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Data</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {incidente.data instanceof Date 
                  ? incidente.data.toLocaleDateString()
                  : incidente.data.toDate().toLocaleDateString()}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Descrição</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {incidente.descricao}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
} 