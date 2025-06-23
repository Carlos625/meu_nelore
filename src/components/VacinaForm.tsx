import { useEffect, useState } from 'react'
import { getAnimais } from '../services/firestore'
import { Animal } from '../types'
import { Vacina } from '../types/vacina'

interface VacinaFormProps {
  onSubmit: (vacina: Omit<Vacina, 'id' | 'createdAt' | 'updatedAt'>) => void
  loading?: boolean
  erro?: string
  initialValues?: Partial<Omit<Vacina, 'id' | 'createdAt' | 'updatedAt'>>
}

export default function VacinaForm({
  onSubmit,
  loading = false,
  erro = '',
  initialValues = {}
}: VacinaFormProps) {
  const [animais, setAnimais] = useState<Animal[]>([])
  const [animalBrinco, setAnimalBrinco] = useState(initialValues.animalBrinco || '')
  const [tipo, setTipo] = useState(initialValues.nome || '')
  const [dataAplicacao, setDataAplicacao] = useState(() =>
    initialValues.dataAplicacao
      ? new Date(initialValues.dataAplicacao).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0]
  )

  useEffect(() => {
    async function carregarAnimais() {
      try {
        const animaisCarregados = await getAnimais()
        setAnimais(animaisCarregados)
      } catch (error) {
        console.error('Erro ao carregar animais:', error)
      }
    }
    carregarAnimais()
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!animalBrinco || !tipo || !dataAplicacao) return

    const dataAplic = new Date(dataAplicacao)
    const dataProxima = new Date(dataAplic)
    dataProxima.setMonth(dataProxima.getMonth() + 6)

    onSubmit({
      animalBrinco,
      nome: tipo.trim(),
      dataAplicacao: dataAplic,
      dataProxima
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      {erro && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Erro! </strong>
          <span className="block sm:inline">{erro}</span>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Número do Brinco</label>
        <select
          value={animalBrinco}
          onChange={e => setAnimalBrinco(e.target.value)}
          className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          required
        >
          <option value="" disabled key="disabled">Selecione o brinco</option>
          {animais.map(animal => (
            <option key={animal.id} value={animal.numeroBrinco}>
              {animal.numeroBrinco} - {animal.raca}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tipo da Vacina</label>
        <input
          type="text"
          value={tipo}
          onChange={e => setTipo(e.target.value)}
          className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          required
          placeholder="Ex: Aftosa, Raiva, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Data da Aplicação</label>
        <input
          type="date"
          value={dataAplicacao}
          onChange={e => setDataAplicacao(e.target.value)}
          className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Próxima Aplicação</label>
        <input
          type="date"
          value={(() => {
            const data = new Date(dataAplicacao)
            data.setMonth(data.getMonth() + 6)
            return data.toISOString().split('T')[0]
          })()}
          disabled
          className="block w-full px-3 py-3 border border-gray-200 rounded-md shadow-sm bg-gray-50 text-gray-500 sm:text-sm"
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
          disabled={loading}
        >
          {loading ? 'Salvando...' : 'Salvar'}
        </button>
      </div>
    </form>
  )
}
