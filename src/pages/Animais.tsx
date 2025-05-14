import { useState, useEffect } from 'react'
import { Animal, getAnimais, addAnimal, updateAnimal, deleteAnimal } from '../services/firestore'
import AnimalForm from './AnimalForm'

export default function Animais() {
  const [animais, setAnimais] = useState<Animal[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    carregarAnimais()
  }, [])

  async function carregarAnimais() {
    try {
      setLoading(true)
      const dados = await getAnimais()
      setAnimais(dados)
    } catch (error) {
      console.error('Erro ao carregar animais:', error)
      setErro('Erro ao carregar animais')
    } finally {
      setLoading(false)
    }
  }

  async function handleSalvarAnimal(animal: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>) {
    try {
      await addAnimal(animal)
      carregarAnimais()
      setShowForm(false)
    } catch (error) {
      console.error('Erro ao adicionar animal:', error)
      setErro('Erro ao adicionar animal')
    }
  }

  async function handleStatusChange(id: string, novoStatus: Animal['status']) {
    try {
      await updateAnimal(id, { status: novoStatus })
      carregarAnimais()
    } catch (error) {
      console.error('Erro ao atualizar status:', error)
      setErro('Erro ao atualizar status')
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm('Tem certeza que deseja excluir este animal?')) return
    try {
      await deleteAnimal(id)
      carregarAnimais()
    } catch (error) {
      console.error('Erro ao excluir animal:', error)
      setErro('Erro ao excluir animal')
    }
  }

  if (loading) {
    return <div className="p-4">Carregando...</div>
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Animais</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
        >
          Novo Animal
        </button>
      </div>
      
      {erro && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
          {erro}
        </div>
      )}

      {showForm && (
        <div className="mb-8">
          <AnimalForm
            onSubmit={handleSalvarAnimal}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Número do Brinco</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cor do Brinco</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Entrada</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Raça</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {animais.map(animal => (
              <tr key={animal.id}>
                <td className="px-6 py-4 whitespace-nowrap">{animal.numeroBrinco}</td>
                <td className="px-6 py-4 whitespace-nowrap">{animal.corBrinco}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {animal.dataEntrada instanceof Date ? animal.dataEntrada.toLocaleDateString() : animal.dataEntrada.toDate().toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{animal.raca}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={animal.status}
                    onChange={e => handleStatusChange(animal.id!, e.target.value as Animal['status'])}
                    className="rounded border-gray-300"
                  >
                    <option value="Ativo">Ativo</option>
                    <option value="Vendido">Vendido</option>
                    <option value="Abatido">Abatido</option>
                    <option value="Morto">Morto</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(animal.id!)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 