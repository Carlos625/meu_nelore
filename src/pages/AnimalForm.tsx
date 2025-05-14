import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Animal, getAnimais } from '../services/firestore'
import { Timestamp } from 'firebase/firestore'

interface AnimalFormProps {
  onSubmit?: (animal: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>) => void
  onCancel?: () => void
  initialData?: Partial<Animal>
}

const coresBrinco = [
  { id: 'amarelo', nome: 'Amarelo', cor: 'bg-yellow-400' },
  { id: 'verde', nome: 'Verde', cor: 'bg-green-500' },
  { id: 'azul', nome: 'Azul', cor: 'bg-blue-500' },
  { id: 'vermelho', nome: 'Vermelho', cor: 'bg-red-500' }
]

type AnimalFormState = {
  numeroBrinco: string
  corBrinco: 'amarelo' | 'verde' | 'azul' | 'vermelho'
  dataEntrada: string // sempre string yyyy-mm-dd
  raca: string
  status: 'Ativo' | 'Vendido' | 'Abatido' | 'Morto'
  foto: string
  observacoes: string
}

export default function AnimalForm({ onSubmit, onCancel, initialData }: AnimalFormProps) {
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<AnimalFormState>({
    numeroBrinco: initialData?.numeroBrinco || '',
    corBrinco: (initialData?.corBrinco as AnimalFormState['corBrinco']) || 'amarelo',
    dataEntrada: initialData?.dataEntrada ? 
      (initialData.dataEntrada instanceof Date ? 
        initialData.dataEntrada.toISOString().split('T')[0] : 
        initialData.dataEntrada.toDate().toISOString().split('T')[0]) : 
      new Date().toISOString().split('T')[0],
    raca: initialData?.raca || '',
    status: (initialData?.status as AnimalFormState['status']) || 'Ativo',
    foto: initialData?.foto || '',
    observacoes: initialData?.observacoes || ''
  })
  const [erro, setErro] = useState('')
  const [fotoPreview, setFotoPreview] = useState<string | undefined>(initialData?.foto)

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
        setFormData({
          numeroBrinco: data.numeroBrinco,
          corBrinco: data.corBrinco as AnimalFormState['corBrinco'],
          dataEntrada: data.dataEntrada ? 
            (data.dataEntrada instanceof Date ? 
              data.dataEntrada.toISOString().split('T')[0] : 
              data.dataEntrada.toDate().toISOString().split('T')[0]) : 
            new Date().toISOString().split('T')[0],
          raca: data.raca,
          status: data.status as AnimalFormState['status'],
          foto: data.foto || '',
          observacoes: data.observacoes || ''
        })
        setFotoPreview(data.foto)
      }
    } catch (error) {
      console.error('Erro ao carregar animal:', error)
      setErro('Erro ao carregar dados do animal')
    } finally {
      setLoading(false)
    }
  }

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setFormData({ ...formData, foto: base64String })
        setFotoPreview(base64String)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro('')
    try {
      if (onSubmit) {
        const animalData: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'> = {
          numeroBrinco: formData.numeroBrinco,
          corBrinco: formData.corBrinco,
          dataEntrada: Timestamp.fromDate(new Date(formData.dataEntrada)),
          raca: formData.raca,
          status: formData.status,
          foto: formData.foto,
          observacoes: formData.observacoes
        }
        await onSubmit(animalData)
        navigate('/animais')
      }
    } catch (error) {
      console.error('Erro ao salvar animal:', error)
      setErro('Erro ao salvar dados do animal')
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
            <label htmlFor="numeroBrinco" className="block text-sm font-medium text-gray-700">
              Número do Brinco
            </label>
            <input
              type="text"
              id="numeroBrinco"
              value={formData.numeroBrinco}
              onChange={e => setFormData({ ...formData, numeroBrinco: e.target.value })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="corBrinco" className="block text-sm font-medium text-gray-700">
              Cor do Brinco
            </label>
            <select
              id="corBrinco"
              value={formData.corBrinco}
              onChange={e => setFormData({ ...formData, corBrinco: e.target.value as AnimalFormState['corBrinco'] })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
            >
              {coresBrinco.map(cor => (
                <option key={cor.id} value={cor.id}>
                  {cor.nome}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="dataEntrada" className="block text-sm font-medium text-gray-700">
              Data de Entrada
            </label>
            <input
              type="date"
              id="dataEntrada"
              value={formData.dataEntrada}
              onChange={e => setFormData({ ...formData, dataEntrada: e.target.value })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="raca" className="block text-sm font-medium text-gray-700">
              Raça
            </label>
            <input
              type="text"
              id="raca"
              value={formData.raca}
              onChange={e => setFormData({ ...formData, raca: e.target.value })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={e => setFormData({ ...formData, status: e.target.value as AnimalFormState['status'] })}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            >
              <option value="Ativo">Ativo</option>
              <option value="Vendido">Vendido</option>
              <option value="Abatido">Abatido</option>
              <option value="Morto">Morto</option>
            </select>
          </div>

          <div className="col-span-2">
            <label htmlFor="foto" className="block text-sm font-medium text-gray-700">
              Foto do Animal
            </label>
            <div className="mt-1 flex items-center space-x-4">
              <input
                type="file"
                id="foto"
                accept="image/*"
                onChange={handleFotoChange}
                className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
              {fotoPreview && (
                <div className="relative w-20 h-20">
                  <img
                    src={fotoPreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, foto: '' })
                      setFotoPreview(undefined)
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="col-span-2">
            <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">
              Observações
            </label>
            <textarea
              id="observacoes"
              value={formData.observacoes}
              onChange={e => setFormData({ ...formData, observacoes: e.target.value })}
              rows={3}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Cancelar
            </button>
          )}
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