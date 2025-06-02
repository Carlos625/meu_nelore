import React, { useState, useEffect } from 'react'
import { Animal, AnimalStatus } from '../types'
import { Timestamp } from 'firebase/firestore'
import { addAnimal, updateAnimal } from '../services/firestore'
import { useNavigate } from 'react-router-dom'

interface AnimalFormProps {
  onSubmit: (animal: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>
  onCancel: () => void
  initialData?: Animal
}

// Função para verificar se é uma data válida
const isValidDate = (d: any): d is Date => d instanceof Date && !isNaN(d.getTime())

const formatDate = (date: Date | undefined): string => {
  if (!date || !isValidDate(date)) return ''
  return date.toISOString().split('T')[0]
}

const coresBrinco = [
  { id: 'amarelo', nome: 'Amarelo', cor: 'bg-yellow-400' },
  { id: 'verde', nome: 'Verde', cor: 'bg-green-500' },
  { id: 'azul', nome: 'Azul', cor: 'bg-blue-500' },
  { id: 'vermelho', nome: 'Vermelho', cor: 'bg-red-500' }
]

export const AnimalForm: React.FC<AnimalFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>>({
    numeroBrinco: '',
    corBrinco: 'amarelo',
    dataEntrada: new Date(),
    dataNascimento: undefined,
    raca: '',
    sexo: undefined,
    status: AnimalStatus.ATIVO,
    observacoes: '',
    foto: undefined
  })

  useEffect(() => {
    if (initialData) {
      const parseDate = (input: any): Date | undefined => {
        if (input instanceof Date) return input
        if (input instanceof Timestamp) return input.toDate()
        const parsed = new Date(input)
        return isValidDate(parsed) ? parsed : undefined
      }

      setFormData({
        numeroBrinco: String(initialData.numeroBrinco || ''),
        corBrinco: initialData.corBrinco,
        dataEntrada: parseDate(initialData.dataEntrada) || new Date(),
        dataNascimento: initialData.dataNascimento ? parseDate(initialData.dataNascimento) : undefined,
        raca: initialData.raca,
        sexo: initialData.sexo,
        status: initialData.status,
        observacoes: initialData.observacoes || '',
        foto: initialData.foto
      })
    }
  }, [initialData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (initialData?.id) {
        await updateAnimal(initialData.id, formData)
      } else {
        await addAnimal(formData)
      }
      navigate('/animais')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao salvar animal')
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setLoading(true)

      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setFormData(prev => ({ ...prev, foto: base64String }))
      }
      reader.readAsDataURL(file)
    } catch (err) {
      setError('Erro ao converter a imagem')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Número do Brinco</label>
        <input
          type="text"
          value={formData.numeroBrinco}
          onChange={e => setFormData(prev => ({ ...prev, numeroBrinco: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Cor do Brinco</label>
        <select
          value={formData.corBrinco}
          onChange={e => setFormData(prev => ({ ...prev, corBrinco: e.target.value as 'amarelo' | 'verde' | 'azul' | 'vermelho' }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
        <label className="block text-sm font-medium text-gray-700">Data de Entrada</label>
        <input
          type="date"
          value={formatDate(formData.dataEntrada)}
          onChange={e =>
            setFormData(prev => ({
              ...prev,
              dataEntrada: new Date(e.target.value)
            }))
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
        <input
          type="date"
          value={formatDate(formData.dataNascimento)}
          onChange={e =>
            setFormData(prev => ({
              ...prev,
              dataNascimento: new Date(e.target.value)
            }))
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Raça</label>
        <input
          type="text"
          value={formData.raca}
          onChange={e => setFormData(prev => ({ ...prev, raca: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Sexo</label>
        <select
          value={formData.sexo || ''}
          onChange={e => setFormData(prev => ({ ...prev, sexo: e.target.value as 'M' | 'F' | undefined }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Selecione...</option>
          <option value="M">Macho</option>
          <option value="F">Fêmea</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          value={formData.status}
          onChange={e => setFormData(prev => ({ ...prev, status: e.target.value as AnimalStatus }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          {Object.values(AnimalStatus).map(status => (
            <option key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Foto</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 block w-full"
        />
        {formData.foto && (
          <img src={formData.foto} alt="Preview" className="mt-2 max-h-48 rounded-md" />
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Observações</label>
        <textarea
          value={formData.observacoes}
          onChange={e => setFormData(prev => ({ ...prev, observacoes: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={3}
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          {loading ? 'Salvando...' : 'Salvar'}
        </button>
      </div>
    </form>
  )
}
