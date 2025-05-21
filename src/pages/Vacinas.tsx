import { useState, useEffect } from 'react'
import { getAnimais } from '../services/firestore'
import { Animal } from '../types'

interface Vacina {
  id: string
  animalBrinco: string
  nome: string
  dataAplicacao: Date | string
  dataProxima: Date | string
  observacoes?: string
}

export default function Vacinas() {
  const [vacinas, setVacinas] = useState<Vacina[]>([])
  const [animais, setAnimais] = useState<Animal[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')
  const [novoVacina, setNovoVacina] = useState({
    animalBrinco: '',
    nome: '',
    dataAplicacao: '',
    dataProxima: '',
    observacoes: ''
  })

  useEffect(() => {
    carregarDados()
  }, [])

  async function carregarDados() {
    try {
      setLoading(true)
      const dadosAnimais = await getAnimais()
      setAnimais(dadosAnimais)
      // TODO: Implementar carregamento de vacinas
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
      setErro('Erro ao carregar dados')
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const vacinaData = {
        ...novoVacina,
        dataAplicacao: new Date(novoVacina.dataAplicacao),
        dataProxima: novoVacina.dataProxima ? new Date(novoVacina.dataProxima) : undefined
      }
      // TODO: Implementar adição de nova vacina
    } catch (error) {
      console.error('Erro ao adicionar vacina:', error)
      setErro('Erro ao adicionar vacina')
    }
  }

  if (loading) {
    return <div className="p-4">Carregando...</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Vacinas</h1>
      
      {erro && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
          {erro}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Nova Vacina</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Animal</label>
            <select
              value={novoVacina.animalBrinco}
              onChange={e => setNovoVacina({ ...novoVacina, animalBrinco: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            >
              <option value="">Selecione um animal</option>
              {animais.map(animal => (
                <option key={animal.numeroBrinco} value={animal.numeroBrinco}>
                  {animal.numeroBrinco} - {animal.raca || 'Sem nome'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome da Vacina</label>
            <input
              type="text"
              value={novoVacina.nome}
              onChange={e => setNovoVacina({ ...novoVacina, nome: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Data de Aplicação</label>
            <input
              type="date"
              value={novoVacina.dataAplicacao}
              onChange={e => setNovoVacina({ ...novoVacina, dataAplicacao: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Data da Próxima</label>
            <input
              type="date"
              value={novoVacina.dataProxima}
              onChange={e => setNovoVacina({ ...novoVacina, dataProxima: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Observações</label>
            <input
              type="text"
              value={novoVacina.observacoes}
              onChange={e => setNovoVacina({ ...novoVacina, observacoes: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
          >
            Adicionar Vacina
          </button>
        </div>
      </form>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Animal</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vacina</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Aplicação</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Próxima Dose</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Observações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vacinas.map(vacina => {
              const animal = animais.find(a => a.numeroBrinco === vacina.animalBrinco)
              return (
                <tr key={vacina.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {animal ? `${animal.numeroBrinco} - ${animal.raca || 'Sem nome'}` : 'Animal não encontrado'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{vacina.nome || 'Não informado'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {vacina.dataAplicacao instanceof Date 
                      ? vacina.dataAplicacao.toLocaleDateString('pt-BR')
                      : typeof vacina.dataAplicacao === 'string'
                        ? new Date(vacina.dataAplicacao).toLocaleDateString('pt-BR')
                        : 'Data não informada'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {vacina.dataProxima instanceof Date 
                      ? vacina.dataProxima.toLocaleDateString('pt-BR')
                      : typeof vacina.dataProxima === 'string'
                        ? new Date(vacina.dataProxima).toLocaleDateString('pt-BR')
                        : 'Data não informada'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{vacina.observacoes || '-'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
} 