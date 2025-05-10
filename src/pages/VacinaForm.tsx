import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addVacina, getAnimais, Vacina, Animal } from '../services/firestore'

export default function VacinaForm() {
  const navigate = useNavigate()
  const [animais, setAnimais] = useState<Animal[]>([])
  const [animalBrinco, setAnimalBrinco] = useState('')
  const [tipo, setTipo] = useState('')
  const [dataAplicacao, setDataAplicacao] = useState(() => new Date().toISOString().split('T')[0])
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAnimais().then(setAnimais)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro('')
    if (!animalBrinco || !tipo || !dataAplicacao) {
      setErro('Preencha todos os campos')
      return
    }
    setLoading(true)
    try {
      const dataAplic = new Date(dataAplicacao)
      const dataProxima = new Date(dataAplic)
      dataProxima.setMonth(dataProxima.getMonth() + 6)
      await addVacina({
        animalBrinco,
        nome: tipo,
        dataAplicacao: dataAplic,
        dataProxima
      } as Omit<Vacina, 'id' | 'createdAt' | 'updatedAt'>)
      navigate('/vacinas')
    } catch (error) {
      setErro('Erro ao registrar vacina')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Registrar Vacina</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
        {erro && <div className="bg-red-100 text-red-700 p-2 rounded">{erro}</div>}
        <div>
          <label className="block text-sm font-medium text-gray-700">Número do Brinco</label>
          <select
            value={animalBrinco}
            onChange={e => setAnimalBrinco(e.target.value)}
            className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            required
          >
            <option value="">Selecione o brinco</option>
            {animais.map(animal => (
              <option key={animal.brinco} value={animal.brinco}>
                {animal.brinco} - {animal.raca}
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
              if (!dataAplicacao) return ''
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
            type="button"
            onClick={() => navigate('/vacinas')}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
            disabled={loading}
          >
            {loading ? 'Salvando...' : 'Salvar'}
          </button>
        </div>
      </form>
    </div>
  )
} 