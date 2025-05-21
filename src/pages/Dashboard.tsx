import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaTag } from 'react-icons/fa'
import { FaCow, FaArrowRightToBracket, FaArrowRightFromBracket } from 'react-icons/fa6'
import { getAnimais, getVacinas, getIncidentes, getConfiguracao, updateConfiguracao } from '../services/firestore'
import { Timestamp } from 'firebase/firestore'
import LoadingSpinner from '../components/LoadingSpinner'
import BrincoModal from '../components/BrincoModal'
import { AnimalStatus, Incidente } from '../types'

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalAnimais: 0,
    totalEntradas: 0,
    totalSaidas: 0,
    totalBrincoDisponivel: 0,
    totalAnimaisVacinados: 0
  })
  const [dataInicial, setDataInicial] = useState('')
  const [dataFinal, setDataFinal] = useState('')
  const [ultimosIncidentes, setUltimosIncidentes] = useState<Incidente[]>([])
  const [, setTotalAnimaisVacinados] = useState(0)
  const [isBrincoModalOpen, setIsBrincoModalOpen] = useState(false)
  const [quantidadeTotalBrinco, setQuantidadeTotalBrinco] = useState(300)

  useEffect(() => {
    loadData()
  }, [dataInicial, dataFinal])

  const loadData = async () => {
    setLoading(true)
    try {
      const [animais, vacinas, incidentes, config] = await Promise.all([
        getAnimais(),
        getVacinas(''),
        getIncidentes(''),
        getConfiguracao()
      ])

      setQuantidadeTotalBrinco(config?.quantidadeTotalBrinco || 300)

      // Filtro por data de entrada
      const animaisFiltrados = animais.filter(a => {
        const dataEntrada = a.dataEntrada instanceof Timestamp ? a.dataEntrada.toDate() : a.dataEntrada
        const afterStart = !dataInicial || dataEntrada >= new Date(dataInicial)
        const beforeEnd = !dataFinal || dataEntrada <= new Date(dataFinal)
        return afterStart && beforeEnd && a.status === AnimalStatus.ATIVO
      })

      // Calcular animais vacinados
      const animaisVacinados = animaisFiltrados.filter(a => 
        vacinas.some(v => v.animalBrinco === a.numeroBrinco)
      ).length

      const entradas = animaisFiltrados.length
      const saidas = animais.filter(a => a.status !== AnimalStatus.ATIVO).length

      setStats({
        totalAnimais: animaisFiltrados.length,
        totalEntradas: entradas,
        totalSaidas: saidas,
        totalBrincoDisponivel: (config?.quantidadeTotalBrinco || 300) - animais.filter(a => a.status === AnimalStatus.ATIVO).length,
        totalAnimaisVacinados: animaisVacinados
      })

      setTotalAnimaisVacinados(animaisVacinados)
      setUltimosIncidentes(incidentes.slice(-5).reverse())
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSaveQuantidadeBrinco = async (quantidade: number) => {
    try {
      await updateConfiguracao({ quantidadeTotalBrinco: quantidade })
      setQuantidadeTotalBrinco(quantidade)
      loadData() // Recarrega os dados para atualizar o total de brincos disponíveis
    } catch (error) {
      console.error('Erro ao salvar quantidade de brincos:', error)
    }
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 mb-2">
            <img src="/Nelore.png" alt="Logo Meu Nelore" className="w-14 h-14 rounded-full shadow" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight drop-shadow-sm">Dashboard</h2>
          </div>
        </div>
        <p className="mt-2 text-lg text-gray-500 font-light">Visão geral do seu rebanho</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center bg-white/80 rounded-xl shadow-sm px-4 py-3 w-full max-w-lg">
          <div className="flex flex-col w-full">
            <label className="block text-xs font-semibold text-gray-600 mb-1">Data inicial</label>
            <div className="relative">
              <input
                type="date"
                value={dataInicial}
                onChange={e => setDataInicial(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                placeholder="Data inicial"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v12.75c0 .414.336.75.75.75z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="block text-xs font-semibold text-gray-600 mb-1">Data final</label>
            <div className="relative">
              <input
                type="date"
                value={dataFinal}
                onChange={e => setDataFinal(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                placeholder="Data final"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v12.75c0 .414.336.75.75.75z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        {/* Total de Animais */}
        <div className="bg-gradient-to-br from-green-50 to-white shadow-lg rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="p-6 flex items-center gap-4">
            <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
              <FaCow className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase">Total de Animais</div>
              <div className="text-3xl font-bold text-gray-900">{stats.totalAnimais}</div>
            </div>
          </div>
          <div className="bg-green-50 px-6 py-3 rounded-b-2xl">
            <Link to="/animais" className="font-medium text-green-700 hover:text-green-900 transition">Ver todos</Link>
          </div>
        </div>
        {/* Total Entradas */}
        <div className="bg-gradient-to-br from-blue-50 to-white shadow-lg rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="p-6 flex items-center gap-4">
            <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
              <FaArrowRightToBracket className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase">Total Entradas</div>
              <div className="text-3xl font-bold text-gray-900">{stats.totalEntradas}</div>
            </div>
          </div>
          <div className="bg-blue-50 px-6 py-3 rounded-b-2xl">
            <Link to="/animais?status=Ativo" className="font-medium text-blue-700 hover:text-blue-900 transition">Ver detalhes</Link>
          </div>
        </div>
        {/* Total Saídas */}
        <div className="bg-gradient-to-br from-yellow-50 to-white shadow-lg rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="p-6 flex items-center gap-4">
            <div className="flex-shrink-0 bg-yellow-100 rounded-full p-3">
              <FaArrowRightFromBracket className="h-8 w-8 text-yellow-600" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase">Total Saídas</div>
              <div className="text-3xl font-bold text-gray-900">{stats.totalSaidas}</div>
            </div>
          </div>
          <div className="bg-yellow-50 px-6 py-3 rounded-b-2xl">
            <Link to="/animais?status=Vendido" className="font-medium text-yellow-700 hover:text-yellow-900 transition">Ver detalhes</Link>
          </div>
        </div>
        {/* Brincos Disponíveis */}
        <div 
          className="bg-gradient-to-br from-teal-50 to-white shadow-lg rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          onClick={() => setIsBrincoModalOpen(true)}
        >
          <div className="p-6 flex items-center gap-4">
            <div className="flex-shrink-0 bg-teal-100 rounded-full p-3">
              <FaTag className="h-8 w-8 text-teal-600" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase">Brincos Disponíveis</div>
              <div className="text-3xl font-bold text-gray-900">{stats.totalBrincoDisponivel}</div>
            </div>
          </div>
          <div className="bg-teal-50 px-6 py-3 rounded-b-2xl">
            <span className="font-medium text-teal-700 hover:text-teal-900 transition">Clique para ajustar</span>
          </div>
        </div>
      </div>

      <BrincoModal
        isOpen={isBrincoModalOpen}
        onClose={() => setIsBrincoModalOpen(false)}
        onSave={handleSaveQuantidadeBrinco}
        quantidadeAtual={quantidadeTotalBrinco}
      />

      {/* Últimos Incidentes */}
      <div className="mt-10">
        <div className="sm:flex sm:items-center sm:justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Últimos Incidentes</h2>
          <Link
            to="/incidentes"
            className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition"
          >
            Ver todos os incidentes
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {ultimosIncidentes.map((incidente) => (
              <li key={incidente.id}>
                <Link to={`/incidentes/${incidente.id}`} className="block hover:bg-gray-50 transition">
                  <div className="px-4 py-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <p className="text-sm font-semibold text-primary-600">
                          Animal #{incidente.animalBrinco?.toString() || 'N/A'} - {incidente.tipo?.charAt(0).toUpperCase() + incidente.tipo?.slice(1) || 'N/A'}
                        </p>
                        <p className="text-sm text-gray-500">{incidente.descricao || 'Sem descrição'}</p>
                      </div>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex mt-2 sm:mt-0">
                      <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        incidente.status === 'resolvido'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {incidente.status === 'resolvido' ? 'Resolvido' : 'Pendente'}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between px-4 pb-2">
                    <div className="sm:flex">
                      <p className="flex items-center text-xs text-gray-400">
                        {incidente.data instanceof Timestamp ? incidente.data.toDate().toLocaleDateString() : new Date(incidente.data).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 