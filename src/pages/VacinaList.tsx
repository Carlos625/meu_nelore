import { useEffect, useState } from 'react'
import { getVacinas, getAnimais, Vacina, Animal, addVacina } from '../services/firestore'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'

function getStatusVacina(dataProxima: string | Date | undefined) {
  if (!dataProxima) return 'vencida'
  const hoje = new Date()
  const proxima = new Date(dataProxima)
  const diff = (proxima.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24)
  if (diff < 0) return 'vencida'
  if (diff <= 15) return 'proxima'
  return 'em-dia'
}

export default function VacinaList() {
  const [vacinas, setVacinas] = useState<Vacina[]>([])
  const [animais, setAnimais] = useState<Animal[]>([])
  const [busca, setBusca] = useState('')
  const [filtroStatus, setFiltroStatus] = useState<'todos' | 'em-dia' | 'proxima' | 'vencida'>('todos')
  const [loading, setLoading] = useState(true)
  const [novoAnimal, setNovoAnimal] = useState({
    numeroBrinco: '',
    nome: '',
    dataAplicacao: '',
    dataProxima: '',
    observacoes: ''
  })
  const [erro, setErro] = useState('')

  useEffect(() => {
    carregarDados()
  }, [])

  async function carregarDados() {
    try {
      setLoading(true)
      const [animaisData, vacinasData] = await Promise.all([
        getAnimais(),
        getVacinas('')
      ])
      setAnimais(animaisData)
      setVacinas(vacinasData)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  const carregarVacinas = async () => {
    try {
      const vacinasData = await getVacinas('')
      setVacinas(vacinasData)
    } catch (error) {
      console.error('Erro ao carregar vacinas:', error)
    }
  }

  // Mapear última vacina por animal
  const vacinasPorAnimal = animais.map(animal => {
    const historico = vacinas.filter(v => String(v.animalBrinco) === String(animal.numeroBrinco))
    const ultima = historico.sort((a, b) => new Date(b.dataAplicacao).getTime() - new Date(a.dataAplicacao).getTime())[0]
    return {
      animal,
      ultimaVacina: ultima
    }
  })

  // Filtros
  const filtrados = vacinasPorAnimal.filter(item => {
    const matchBusca = item.animal.numeroBrinco.toString().includes(busca) ||
      (item.animal.raca || '').toLowerCase().includes(busca.toLowerCase())
    let matchStatus = true
    if (filtroStatus !== 'todos') {
      if (!item.ultimaVacina) {
        matchStatus = filtroStatus === 'vencida'
      } else {
        matchStatus = getStatusVacina(item.ultimaVacina.dataProxima) === filtroStatus
      }
    }
    return matchBusca && matchStatus
  })

  const animaisFiltrados = animais.filter(animal => {
    const matchBusca = animal.numeroBrinco.toString().includes(busca) ||
      (animal.raca || '').toLowerCase().includes(busca.toLowerCase())
    return matchBusca
  })

  // Resumo
  const total = vacinasPorAnimal.length
  const vacinados = vacinasPorAnimal.filter(v => v.ultimaVacina).length
  const percentual = total > 0 ? Math.round((vacinados / total) * 100) : 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const animalSelecionado = animais.find(a => a.numeroBrinco === novoAnimal.numeroBrinco)
      if (!animalSelecionado) {
        setErro('Animal não encontrado')
        return
      }

      const vacinaData = {
        animalBrinco: novoAnimal.numeroBrinco,
        nome: novoAnimal.nome,
        dataAplicacao: new Date(novoAnimal.dataAplicacao),
        dataProxima: novoAnimal.dataProxima ? new Date(novoAnimal.dataProxima) : undefined,
        observacoes: novoAnimal.observacoes
      }

      await addVacina(vacinaData)
      setNovoAnimal({
        numeroBrinco: '',
        nome: '',
        dataAplicacao: '',
        dataProxima: '',
        observacoes: ''
      })
      carregarVacinas()
    } catch (error) {
      console.error('Erro ao adicionar vacina:', error)
      setErro('Erro ao adicionar vacina')
    }
  }

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {erro && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{erro}</span>
            </div>
          )}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Controle de Vacinas</h1>
            <div className="mt-2 flex flex-col sm:flex-row gap-4">
              <div>
                <span className="block text-sm text-gray-700">Percentual vacinado</span>
                <span className="text-2xl font-bold text-primary-600">{percentual}%</span>
              </div>
              <div>
                <span className="block text-sm text-gray-700">Animais vacinados</span>
                <span className="text-lg font-medium text-green-700">{vacinados}</span>
              </div>
              <div>
                <span className="block text-sm text-gray-700">Não vacinados</span>
                <span className="text-lg font-medium text-red-700">{total - vacinados}</span>
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col sm:flex-row gap-2 items-end">
            <input
              type="text"
              value={busca}
              onChange={e => setBusca(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm"
              placeholder="Buscar por brinco"
            />
            <select
              value={filtroStatus}
              onChange={e => setFiltroStatus(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm"
            >
              <option value="todos">Todos</option>
              <option value="em-dia">Em dia</option>
              <option value="proxima">Próxima</option>
              <option value="vencida">Vencida</option>
            </select>
            <Link to="/vacinas/nova" className="ml-auto px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 text-sm">Registrar Vacina</Link>
          </div>
          <div className="bg-white shadow rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Brinco</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Animal</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Última Vacina</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Próxima</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtrados.map(({ animal, ultimaVacina }) => {
                  const status = getStatusVacina(ultimaVacina?.dataProxima)
                  return (
                    <tr key={animal.id} className={
                      status === 'vencida' ? 'bg-red-50' : status === 'proxima' ? 'bg-yellow-50' : ''
                    }>
                      <td className="px-4 py-2 font-mono">{animal.numeroBrinco}</td>
                      <td className="px-4 py-2">{animal.raca}</td>
                      <td className="px-4 py-2">{ultimaVacina ? (ultimaVacina.dataAplicacao ? new Date(ultimaVacina.dataAplicacao).toLocaleDateString() : '-') : '-'}</td>
                      <td className="px-4 py-2">{ultimaVacina ? ultimaVacina.nome : '-'}</td>
                      <td className="px-4 py-2">{ultimaVacina ? (ultimaVacina.dataProxima ? new Date(ultimaVacina.dataProxima).toLocaleDateString() : '-') : '-'}</td>
                      <td className="px-4 py-2">
                        {status === 'em-dia' && <span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs">Em dia</span>}
                        {status === 'proxima' && <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800 text-xs">Próxima</span>}
                        {status === 'vencida' && <span className="px-2 py-1 rounded bg-red-100 text-red-800 text-xs">Vencida</span>}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-4">Registrar Nova Vacina</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="numeroBrinco" className="block text-sm font-medium text-gray-700">
                  Número do Brinco
                </label>
                <select
                  value={novoAnimal.numeroBrinco}
                  onChange={e => setNovoAnimal({ ...novoAnimal, numeroBrinco: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                >
                  <option value="">Selecione um animal</option>
                  {animaisFiltrados.map(animal => (
                    <option key={animal.id} value={animal.numeroBrinco}>
                      {animal.numeroBrinco} - {animal.raca}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  value={novoAnimal.nome}
                  onChange={e => setNovoAnimal({ ...novoAnimal, nome: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="dataAplicacao" className="block text-sm font-medium text-gray-700">
                  Data de Aplicação
                </label>
                <input
                  type="date"
                  id="dataAplicacao"
                  value={novoAnimal.dataAplicacao}
                  onChange={e => setNovoAnimal({ ...novoAnimal, dataAplicacao: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="dataProxima" className="block text-sm font-medium text-gray-700">
                  Data Próxima
                </label>
                <input
                  type="date"
                  id="dataProxima"
                  value={novoAnimal.dataProxima}
                  onChange={e => setNovoAnimal({ ...novoAnimal, dataProxima: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">
                  Observações
                </label>
                <textarea
                  id="observacoes"
                  value={novoAnimal.observacoes}
                  onChange={e => setNovoAnimal({ ...novoAnimal, observacoes: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <button type="submit" className="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">
                Registrar Vacina
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  )
} 