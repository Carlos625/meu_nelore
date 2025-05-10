import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Animal, getAnimais, addAnimal, updateAnimal } from '../services/firestore'
import LoadingSpinner from '../components/LoadingSpinner'

export default function AnimalForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [animal, setAnimal] = useState<Partial<Animal>>({
    brinco: '',
    corBrinco: 'azul',
    raca: '',
    idade: 0,
    status: 'ativo',
    dataEntrada: new Date(),
    observacoes: ''
  })
  const [foto, setFoto] = useState<string | null>(null)
  const [erro, setErro] = useState('')

  useEffect(() => {
    if (id) {
      loadAnimal()
    }
  }, [id])

  async function loadAnimal() {
    try {
      setLoading(true)
      const animais = await getAnimais()
      const data = animais.find(a => a.id === id)
      if (data) {
        setAnimal({
          ...data,
          dataEntrada: data.dataEntrada ? new Date(data.dataEntrada) : '',
          dataSaida: data.dataSaida ? new Date(data.dataSaida) : ''
        })
        if (data.foto) {
          setFoto(data.foto)
        }
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

    try {
      setLoading(true)
      if (id) {
        await updateAnimal(id, { ...animal, foto })
      } else {
        await addAnimal({ ...animal, foto } as Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>)
      }
      navigate('/animais')
    } catch (error) {
      console.error('Erro ao salvar animal:', error)
      setErro('Erro ao salvar dados do animal')
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
        {id ? 'Editar Animal' : 'Novo Animal'}
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="brinco" className="block text-sm font-medium text-gray-700">
              Número do Brinco
            </label>
            <input
              type="number"
              id="brinco"
              value={animal.brinco || ''}
              onChange={(e) => setAnimal({ ...animal, brinco: Number(e.target.value) })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
              min="1"
              max="300"
            />
          </div>

          <div>
            <label htmlFor="corBrinco" className="block text-sm font-medium text-gray-700">
              Cor do Brinco
            </label>
            <select
              id="corBrinco"
              value={animal.corBrinco}
              onChange={e => setAnimal({ ...animal, corBrinco: e.target.value as 'azul' | 'verde' | 'amarelo' })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
            >
              <option value="azul">Azul</option>
              <option value="verde">Verde</option>
              <option value="amarelo">Amarelo</option>
            </select>
          </div>

          <div>
            <label htmlFor="raca" className="block text-sm font-medium text-gray-700">
              Raça
            </label>
            <input
              type="text"
              id="raca"
              value={animal.raca}
              onChange={(e) => setAnimal({ ...animal, raca: e.target.value })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="idade" className="block text-sm font-medium text-gray-700">
              Idade (anos)
            </label>
            <input
              type="number"
              id="idade"
              value={animal.idade || ''}
              onChange={(e) => setAnimal({ ...animal, idade: Number(e.target.value) })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
              min="0"
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              value={animal.status}
              onChange={(e) => setAnimal({ ...animal, status: e.target.value as Animal['status'] })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            >
              <option value="ativo">Ativo</option>
              <option value="vendido">Vendido</option>
              <option value="abatido">Abatido</option>
              <option value="morto">Morto</option>
            </select>
          </div>

          <div>
            <label htmlFor="dataEntrada" className="block text-sm font-medium text-gray-700">
              Data de Entrada
            </label>
            <input
              type="date"
              id="dataEntrada"
              value={
                animal.dataEntrada && !isNaN(new Date(animal.dataEntrada).getTime())
                  ? new Date(animal.dataEntrada).toISOString().split('T')[0]
                  : ''
              }
              onChange={e => setAnimal({ ...animal, dataEntrada: new Date(e.target.value) })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
            />
          </div>

          {animal.status !== 'ativo' && (
            <div>
              <label htmlFor="dataSaida" className="block text-sm font-medium text-gray-700">
                Data de Saída
              </label>
              <input
                type="date"
                id="dataSaida"
                value={
                  animal.dataSaida && !isNaN(new Date(animal.dataSaida).getTime())
                    ? new Date(animal.dataSaida).toISOString().split('T')[0]
                    : ''
                }
                onChange={e => setAnimal({ ...animal, dataSaida: new Date(e.target.value) })}
                className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                required
              />
            </div>
          )}
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

        <div>
          <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">
            Observações
          </label>
          <textarea
            id="observacoes"
            value={animal.observacoes || ''}
            onChange={(e) => setAnimal({ ...animal, observacoes: e.target.value })}
            rows={3}
            className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/animais')}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {loading ? 'Salvando...' : 'Salvar'}
          </button>
        </div>
      </form>
    </div>
  )
} 