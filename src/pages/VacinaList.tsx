import { useEffect, useState } from 'react'
import { getVacinas, getAnimais, Vacina, Animal } from '../services/firestore'
import { Link } from 'react-router-dom'

function getStatusVacina(dataProxima: Date) {
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

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setLoading(true)
      const [vacinasData, animaisData] = await Promise.all([
        getVacinas(''),
        getAnimais()
      ])
      setVacinas(vacinasData)
      setAnimais(animaisData)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  // Mapear última vacina por animal
  const vacinasPorAnimal = animais.map(animal => {
    const historico = vacinas.filter(v => String(v.animalBrinco) === String(animal.brinco))
    const ultima = historico.sort((a, b) => new Date(b.dataAplicacao).getTime() - new Date(a.dataAplicacao).getTime())[0]
    return {
      animal,
      ultimaVacina: ultima
    }
  })

  // Filtros
  const filtrados = vacinasPorAnimal.filter(item => {
    const matchBusca = item.animal.brinco.toString().includes(busca)
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

  // Resumo
  const total = vacinasPorAnimal.length
  const vacinados = vacinasPorAnimal.filter(v => v.ultimaVacina).length
  const percentual = total > 0 ? Math.round((vacinados / total) * 100) : 0

  return (
    <div>
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
              const status = ultimaVacina ? getStatusVacina(ultimaVacina.dataProxima) : 'vencida'
              return (
                <tr key={animal.id} className={
                  status === 'vencida' ? 'bg-red-50' : status === 'proxima' ? 'bg-yellow-50' : ''
                }>
                  <td className="px-4 py-2 font-mono">{animal.brinco}</td>
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
    </div>
  )
} 