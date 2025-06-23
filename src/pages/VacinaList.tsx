import { useEffect, useState } from 'react'
import { vacinaService } from '../services/vacinaService'
import { animalService } from '../services/animalService'
import { Animal } from '../types'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import { Timestamp } from 'firebase/firestore'
import { Vacina } from '../types/vacina'

function getStatusVacina(dataProxima: Date | Timestamp | undefined) {
  if (!dataProxima) return 'vencida'
  const hoje = new Date()
  const proxima = dataProxima instanceof Timestamp ? dataProxima.toDate() : dataProxima
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
    carregarDados()
  }, [])

  async function carregarDados() {
    try {
      setLoading(true)
      const [animaisData, vacinasData] = await Promise.all([
        animalService.getAnimais(),
        vacinaService.getTodasVacinas()
      ])
      setAnimais(animaisData)
      setVacinas(vacinasData)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }


  // Mapear última vacina por animal
  const vacinasPorAnimal: { animal: Animal; ultimaVacina: Vacina }[] = animais
    .map(animal => {
      const historico = vacinas.filter(v => String(v.animalBrinco) === String(animal.numeroBrinco))
      if (historico.length === 0) return null
      const ultima = historico.sort((a, b) => {
        const dataA = a.dataAplicacao instanceof Timestamp ? a.dataAplicacao.toDate() : new Date(a.dataAplicacao as string)
        const dataB = b.dataAplicacao instanceof Timestamp ? b.dataAplicacao.toDate() : new Date(b.dataAplicacao as string)
        return dataB.getTime() - dataA.getTime()
      })[0]
      return { animal, ultimaVacina: ultima }
    })
    .filter((item): item is { animal: Animal; ultimaVacina: Vacina } => item !== null)

  // Filtros
  const filtrados = vacinasPorAnimal.filter(item => {
    const matchBusca = item?.animal.numeroBrinco.toString().includes(busca) ||
      (item?.animal.raca || '').toLowerCase().includes(busca.toLowerCase())
    let matchStatus = true
    if (filtroStatus !== 'todos') {
      if (!item?.ultimaVacina) {
        matchStatus = filtroStatus === 'vencida'
      } else {
        matchStatus = getStatusVacina(item?.ultimaVacina.dataProxima as Date | Timestamp | undefined) === filtroStatus
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
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
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
                  if (!animal || !ultimaVacina) return null
                  const status = getStatusVacina(ultimaVacina?.dataProxima as Date | Timestamp | undefined)
                  return (
                    <tr key={animal.id} className={
                      status === 'vencida' ? 'bg-red-50' : status === 'proxima' ? 'bg-yellow-50' : ''
                    }>
                      <td className="px-4 py-2 font-mono">{animal.numeroBrinco}</td>
                      <td className="px-4 py-2">{animal.raca}</td>
                      <td className="px-4 py-2">{ultimaVacina ? (
                        ultimaVacina.dataAplicacao instanceof Timestamp 
                          ? ultimaVacina.dataAplicacao.toDate().toLocaleDateString()
                          : ultimaVacina.dataAplicacao instanceof Date
                            ? ultimaVacina.dataAplicacao.toLocaleDateString()
                            : new Date(ultimaVacina.dataAplicacao as string).toLocaleDateString()
                      ) : '-'}</td>
                      <td className="px-4 py-2">{ultimaVacina ? ultimaVacina.nome : '-'}</td>
                      <td className="px-4 py-2">{ultimaVacina ? (
                        ultimaVacina.dataProxima instanceof Timestamp
                          ? ultimaVacina.dataProxima.toDate().toLocaleDateString()
                          : ultimaVacina.dataProxima instanceof Date
                            ? ultimaVacina.dataProxima.toLocaleDateString()
                            : new Date(ultimaVacina.dataProxima as string).toLocaleDateString()
                      ) : '-'}</td>
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
        </>
      )}
    </div>
  )
} 