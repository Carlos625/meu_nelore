import { useState, useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { addIncidente, getAnimais } from '../services/firestore'
import { Animal, Incidente, IncidenteStatus, IncidenteTipo } from '../types'
import { Timestamp } from 'firebase/firestore'

export default function IncidentForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const animalId = searchParams.get('animalId')

  const [loading, setLoading] = useState(false)
  const [incidente, setIncidente] = useState<Partial<Incidente>>({
    tipo: IncidenteTipo.DOENCA,
    descricao: '',
    data: new Date(),
    status: IncidenteStatus.PENDENTE
  })
  const [foto, setFoto] = useState<string | null>(null)
  const [erro, setErro] = useState('')
  const [animal, setAnimal] = useState<Animal | null>(null)
  const [animais, setAnimais] = useState<Animal[]>([])

  useEffect(() => {
    if (id) {
      loadIncidente()
    } else if (animalId) {
      loadAnimal()
    } else {
      getAnimais().then(setAnimais)
    }
  }, [id, animalId])

  async function loadIncidente() {
    // Aqui você pode buscar o incidente pelo id usando getIncidentes
    // e setar o incidente e o animal correspondente
  }

  async function loadAnimal() {
    try {
      setLoading(true)
      const animaisData = await getAnimais()
      const found = animaisData.find(a => a.id === animalId)
      if (found) {
        setAnimal(found)
        setIncidente(prev => ({ ...prev, animalId: found.id }))
      } else {
        setErro('Animal não encontrado')
      }
    } catch (error) {
      console.error('Erro ao carregar animal:', error)
      setErro('Erro ao carregar dados do animal')
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro('')

    if (!animal && !incidente.animalId) {
      setErro('Selecione um animal')
      return
    }

    try {
      setLoading(true)
      const data = incidente.data instanceof Timestamp 
        ? incidente.data.toDate()
        : incidente.data instanceof Date
          ? incidente.data
          : new Date()

      await addIncidente({ 
        ...incidente, 
        data,
        foto 
      } as Omit<Incidente, 'id' | 'createdAt' | 'updatedAt'>)
      navigate('/incidentes')
    } catch (error) {
      console.error('Erro ao salvar incidente:', error)
      setErro('Erro ao salvar dados do incidente')
    } finally {
      setLoading(false)
    }
  }

  function handleFotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        {id ? 'Editar Incidente' : 'Novo Incidente'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {erro && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">{erro}</h3>
              </div>
            </div>
          </div>
        )}

        {!id && !animalId && (
          <div>
            <label htmlFor="animalId" className="block text-sm font-medium text-gray-700">
              Animal
            </label>
            <select
              id="animalId"
              value={incidente.animalId || ''}
              onChange={(e) => {
                const animalId = e.target.value
                setIncidente(prev => ({ ...prev, animalId }))
                loadAnimal()
              }}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
            >
              <option value="">Selecione um animal</option>
              {animais.map(animal => (
                <option key={animal.id} value={animal.id}>
                  {animal.numeroBrinco} - {animal.raca}
                </option>
              ))}
            </select>
          </div>
        )}

        {animal && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-sm font-medium text-gray-700">Animal Selecionado</h3>
            <div className="mt-2 flex items-center">
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
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">
              Tipo
            </label>
            <select
              id="tipo"
              value={incidente.tipo}
              onChange={(e) => setIncidente({ ...incidente, tipo: e.target.value as IncidenteTipo })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
            >
              {Object.values(IncidenteTipo).map(tipo => (
                <option key={tipo} value={tipo}>
                  {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              value={incidente.status}
              onChange={(e) => setIncidente({ ...incidente, status: e.target.value as IncidenteStatus })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            >
              {Object.values(IncidenteStatus).map(status => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="data" className="block text-sm font-medium text-gray-700">
              Data
            </label>
            <input
              type="date"
              id="data"
              value={incidente.data instanceof Date 
                ? incidente.data.toISOString().split('T')[0]
                : incidente.data instanceof Timestamp
                  ? incidente.data.toDate().toISOString().split('T')[0]
                  : new Date().toISOString().split('T')[0]}
              onChange={(e) => setIncidente({ ...incidente, data: new Date(e.target.value) })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <textarea
            id="descricao"
            value={incidente.descricao || ''}
            onChange={(e) => setIncidente({ ...incidente, descricao: e.target.value })}
            rows={3}
            className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="foto" className="block text-sm font-medium text-gray-700">
            Foto
          </label>
          <div className="mt-1 flex items-center">
            {foto && (
              <img
                src={foto}
                alt="Preview"
                className="h-32 w-32 object-cover rounded-lg"
              />
            )}
            <input
              type="file"
              id="foto"
              accept="image/*"
              onChange={handleFotoChange}
              className="ml-4 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-primary-50 file:text-primary-700
                hover:file:bg-primary-100"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/incidentes')}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
} 