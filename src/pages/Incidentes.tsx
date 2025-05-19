import { useState, useEffect } from 'react'
import { getIncidentes, addIncidente, getAnimais, updateIncidente, deleteIncidente } from '../services/firestore'
import { Timestamp } from 'firebase/firestore'
import { Animal, Incidente, IncidenteStatus, IncidenteTipo } from '../types'

export default function Incidentes() {
  const [incidentes, setIncidentes] = useState<Incidente[]>([])
  const [animais, setAnimais] = useState<Animal[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [incidenteParaEditar, setIncidenteParaEditar] = useState<Incidente | undefined>()
  const [confirmDialog, setConfirmDialog] = useState<{ show: boolean; incidenteId: string }>({ show: false, incidenteId: '' })
  const [novoIncidente, setNovoIncidente] = useState({
    animalId: '',
    animalBrinco: '',
    data: '',
    tipo: IncidenteTipo.OUTRO,
    descricao: '',
    status: IncidenteStatus.PENDENTE
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
      const animal = animais.find(a => a.id === novoIncidente.animalId)
      if (!animal) {
        throw new Error('Animal não encontrado')
      }

      const incidenteData = {
        ...novoIncidente,
        data: new Date(novoIncidente.data),
        animalBrinco: animal.numeroBrinco,
        status: IncidenteStatus.PENDENTE
      }
      await addIncidente(incidenteData)
      setNovoIncidente({
        animalId: '',
        animalBrinco: '',
        data: '',
        tipo: IncidenteTipo.OUTRO,
        descricao: '',
        status: IncidenteStatus.PENDENTE
      })
      carregarDados()
    } catch (error) {
      console.error('Erro ao adicionar incidente:', error)
      setErro('Erro ao adicionar incidente')
    }
  }

  const handleStatusChange = async (incidenteId: string, novoStatus: IncidenteStatus) => {
    try {
      await updateIncidente(incidenteId, { status: novoStatus })
      carregarDados()
    } catch (error) {
      console.error('Erro ao atualizar status:', error)
      setErro('Erro ao atualizar status')
    }
  }

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!incidenteParaEditar) return

    try {
      const data = incidenteParaEditar.data instanceof Timestamp 
        ? incidenteParaEditar.data.toDate()
        : incidenteParaEditar.data instanceof Date
          ? incidenteParaEditar.data
          : new Date(incidenteParaEditar.data)

      await updateIncidente(incidenteParaEditar.id, {
        ...incidenteParaEditar,
        data
      })
      setShowForm(false)
      setIncidenteParaEditar(undefined)
      carregarDados()
    } catch (error) {
      console.error('Erro ao editar incidente:', error)
      setErro('Erro ao editar incidente')
    }
  }

  const handleDelete = async () => {
    try {
      await deleteIncidente(confirmDialog.incidenteId)
      setConfirmDialog({ show: false, incidenteId: '' })
      carregarDados()
    } catch (error) {
      console.error('Erro ao excluir incidente:', error)
      setErro('Erro ao excluir incidente')
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

      {showForm && incidenteParaEditar ? (
        <form onSubmit={handleEdit} className="mb-8 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Editar Incidente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Animal</label>
              <select
                value={incidenteParaEditar.animalId}
                onChange={e => setIncidenteParaEditar({ ...incidenteParaEditar, animalId: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              >
                <option value="">Selecione um animal</option>
                {animais.map(animal => (
                  <option key={animal.id} value={animal.id}>
                    {animal.numeroBrinco} - {animal.raca || 'Sem raça'}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Data</label>
              <input
                type="date"
                value={incidenteParaEditar.data instanceof Date 
                  ? incidenteParaEditar.data.toISOString().split('T')[0]
                  : incidenteParaEditar.data instanceof Timestamp
                    ? incidenteParaEditar.data.toDate().toISOString().split('T')[0]
                    : new Date(incidenteParaEditar.data).toISOString().split('T')[0]}
                onChange={e => setIncidenteParaEditar({ ...incidenteParaEditar, data: new Date(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tipo</label>
              <select
                value={incidenteParaEditar.tipo}
                onChange={e => setIncidenteParaEditar({ ...incidenteParaEditar, tipo: e.target.value as IncidenteTipo })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              >
                {Object.values(IncidenteTipo).map(tipo => (
                  <option key={tipo} value={tipo}>
                    {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Descrição</label>
              <input
                type="text"
                value={incidenteParaEditar.descricao}
                onChange={e => setIncidenteParaEditar({ ...incidenteParaEditar, descricao: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                setShowForm(false)
                setIncidenteParaEditar(undefined)
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              Salvar
            </button>
          </div>
        </form>
      ) : (
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
                    {animal.numeroBrinco} - {animal.raca || 'Sem raça'}
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
              <select
                value={novoIncidente.tipo}
                onChange={e => setNovoIncidente({ ...novoIncidente, tipo: e.target.value as IncidenteTipo })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              >
                {Object.values(IncidenteTipo).map(tipo => (
                  <option key={tipo} value={tipo}>
                    {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                  </option>
                ))}
              </select>
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
      )}

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Animal</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {incidentes.map(incidente => {
              const animal = animais.find(a => a.id === incidente.animalId)
              return (
                <tr key={incidente.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {animal ? `${animal.numeroBrinco} - ${animal.raca || 'Sem raça'}` : 'Animal não encontrado'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {incidente.data instanceof Timestamp 
                      ? incidente.data.toDate().toLocaleDateString('pt-BR')
                      : incidente.data instanceof Date
                        ? incidente.data.toLocaleDateString('pt-BR')
                        : new Date(incidente.data).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{incidente.tipo || ''}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{incidente.descricao || ''}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={incidente.status || IncidenteStatus.PENDENTE}
                      onChange={e => handleStatusChange(incidente.id, e.target.value as IncidenteStatus)}
                      className="rounded border-gray-300"
                    >
                      {Object.values(IncidenteStatus).map(status => (
                        <option key={status} value={status}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <button
                      onClick={() => {
                        setIncidenteParaEditar(incidente)
                        setShowForm(true)
                      }}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => setConfirmDialog({ show: true, incidenteId: incidente.id })}
                      className="text-red-600 hover:text-red-900"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {confirmDialog.show && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-medium mb-4">Confirmar Exclusão</h3>
            <p className="mb-4">Tem certeza que deseja excluir este incidente?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setConfirmDialog({ show: false, incidenteId: '' })}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 