import { useState, useEffect } from 'react'
import { Incidente, Animal, getIncidentes, addIncidente, getAnimais } from '../services/firestore'

export default function Incidentes() {
  const [incidentes, setIncidentes] = useState<Incidente[]>([])
  const [animais, setAnimais] = useState<Animal[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')
  const [novoIncidente, setNovoIncidente] = useState({
    animalId: '',
    data: '',
    tipo: '',
    descricao: ''
  })

  useEffect(() => {
    carregarDados()
  }, [])

  async function carregarDados() {
    try {
      setLoading(true)
      const [dadosIncidentes, dadosAnimais] = await Promise.all([
        getIncidentes(''),
        getAnimais()
      ])
      setIncidentes(dadosIncidentes)
      setAnimais(dadosAnimais)
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
      const incidenteData = {
        ...novoIncidente,
        data: new Date(novoIncidente.data)
      }
      await addIncidente(incidenteData)
      setNovoIncidente({
        animalId: '',
        data: '',
        tipo: '',
        descricao: ''
      })
      carregarDados()
    } catch (error) {
      console.error('Erro ao adicionar incidente:', error)
      setErro('Erro ao adicionar incidente')
    }
  }

  if (loading) {
    return <div className="p-4">Carregando...</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Incidentes</h1>
      
      {erro && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
          {erro}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Novo Incidente</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Animal</label>
            <select
              value={novoIncidente.animalId}
              onChange={e => setNovoIncidente({ ...novoIncidente, animalId: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            >
              <option value="">Selecione um animal</option>
              {animais.map(animal => (
                <option key={animal.id} value={animal.id}>
                  {animal.brinco} - {animal.nome || 'Sem nome'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Data</label>
            <input
              type="date"
              value={novoIncidente.data}
              onChange={e => setNovoIncidente({ ...novoIncidente, data: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo</label>
            <input
              type="text"
              value={novoIncidente.tipo}
              onChange={e => setNovoIncidente({ ...novoIncidente, tipo: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Descrição</label>
            <input
              type="text"
              value={novoIncidente.descricao}
              onChange={e => setNovoIncidente({ ...novoIncidente, descricao: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
          >
            Adicionar Incidente
          </button>
        </div>
      </form>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Animal</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {incidentes.map(incidente => {
              const animal = animais.find(a => a.id === incidente.animalId)
              return (
                <tr key={incidente.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {animal ? `${animal.brinco} - ${animal.nome || 'Sem nome'}` : 'Animal não encontrado'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {incidente.data.toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{incidente.tipo}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{incidente.descricao}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
} 