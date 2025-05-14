import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Animal, getAnimais, deleteAnimal } from '../services/firestore'
import { Incidente, getIncidentes } from '../services/firestore'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import LoadingSpinner from '../components/LoadingSpinner'
import ImageModal from '../components/ImageModal'

export default function AnimalDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [animal, setAnimal] = useState<Animal | null>(null)
  const [incidentes, setIncidentes] = useState<Incidente[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  useEffect(() => {
    if (id) {
      loadData()
    }
  }, [id])

  async function loadData() {
    try {
      setLoading(true)
      const animais = await getAnimais()
      const animalData = animais.find(a => a.id === id)
      if (animalData) {
        setAnimal(animalData)
        const incidentesData = await getIncidentes(animalData.id)
        setIncidentes(incidentesData)
      } else {
        setErro('Animal não encontrado')
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
      setErro('Erro ao carregar dados do animal')
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete() {
    if (!animal || !window.confirm('Tem certeza que deseja excluir este animal?')) {
      return
    }

    try {
      setLoading(true)
      await deleteAnimal(animal.id)
      navigate('/animais')
    } catch (error) {
      console.error('Erro ao excluir animal:', error)
      setErro('Erro ao excluir animal')
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (erro || !animal) {
    return (
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">{erro || 'Animal não encontrado'}</h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Animal #{animal.brinco}
        </h1>
        <div className="mt-3 sm:mt-0 flex space-x-3">
          <button
            type="button"
            onClick={() => navigate(`/animais/${animal.id}/editar`)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
            Editar
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Excluir
          </button>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center">
            {animal.foto ? (
              <img
                src={animal.foto}
                alt={`Animal ${animal.brinco}`}
                className="h-24 w-24 rounded-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setIsImageModalOpen(true)}
              />
            ) : (
              <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-2xl font-medium">
                  {animal.brinco}
                </span>
              </div>
            )}
            <div className="ml-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Informações do Animal
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Detalhes e histórico do animal
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Raça</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {animal.raca}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Idade</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {animal.idade} anos
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  animal.status === 'ativo'
                    ? 'bg-green-100 text-green-800'
                    : animal.status === 'vendido'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {animal.status.charAt(0).toUpperCase() + animal.status.slice(1)}
                </span>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Data de Entrada</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {new Date(animal.dataEntrada).toLocaleDateString()}
              </dd>
            </div>
            {animal.dataSaida && (
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Data de Saída</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {new Date(animal.dataSaida).toLocaleDateString()}
                </dd>
              </div>
            )}
            {animal.observacoes && (
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Observações</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {animal.observacoes}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      <div className="mt-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">Histórico de Incidentes</h2>
          <button
            type="button"
            onClick={() => navigate(`/incidentes/novo?animalId=${animal.id}`)}
            className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Registrar Incidente
          </button>
        </div>

        {incidentes.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">Nenhum incidente registrado</p>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {incidentes.map((incidente) => (
                <li key={incidente.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {incidente.foto && (
                          <img
                            src={incidente.foto}
                            alt="Foto do incidente"
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                        )}
                        <div className="ml-4">
                          <p className="text-sm font-medium text-primary-600">
                            {incidente.tipo.charAt(0).toUpperCase() + incidente.tipo.slice(1)}
                          </p>
                          <p className="text-sm text-gray-500">{incidente.descricao}</p>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          incidente.status === 'resolvido'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {incidente.status === 'resolvido' ? 'Resolvido' : 'Pendente'}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          {new Date(incidente.data).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    {incidente.observacoes && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{incidente.observacoes}</p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageUrl={animal.foto || '/placeholder-animal.jpg'}
        title={`Animal ${animal.brinco}`}
      />
    </div>
  )
} 