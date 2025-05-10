import { useState, useEffect } from 'react'
import { Animal, getAnimais, addAnimal, updateAnimal, deleteAnimal } from '../services/firestore'

export default function Animais() {
  const [animais, setAnimais] = useState<Animal[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')
  const [novoAnimal, setNovoAnimal] = useState({
    brinco: '',
    nome: '',
    dataNascimento: '',
    raca: '',
    sexo: 'M' as 'M' | 'F',
    status: 'Ativo' as const,
    observacoes: ''
  })

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const animalData = {
        ...novoAnimal,
        dataNascimento: novoAnimal.dataNascimento ? new Date(novoAnimal.dataNascimento) : undefined
      }
      await addAnimal(animalData)
      setNovoAnimal({
        brinco: '',
        nome: '',
        dataNascimento: '',
        raca: '',
        sexo: 'M' as 'M' | 'F',
        status: 'Ativo' as const,
        observacoes: ''
      })
      carregarAnimais()
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
      <h1 className="text-2xl font-bold mb-4">Animais</h1>
      
      {erro && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
          {erro}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Novo Animal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Brinco</label>
            <input
              type="text"
              value={novoAnimal.brinco}
              onChange={e => setNovoAnimal({ ...novoAnimal, brinco: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              value={novoAnimal.nome}
              onChange={e => setNovoAnimal({ ...novoAnimal, nome: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
            <input
              type="date"
              value={novoAnimal.dataNascimento}
              onChange={e => setNovoAnimal({ ...novoAnimal, dataNascimento: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Raça</label>
            <input
              type="text"
              value={novoAnimal.raca}
              onChange={e => setNovoAnimal({ ...novoAnimal, raca: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sexo</label>
            <select
              value={novoAnimal.sexo}
              onChange={e => setNovoAnimal({ ...novoAnimal, sexo: e.target.value as 'M' | 'F' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="M">Macho</option>
              <option value="F">Fêmea</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Observações</label>
            <input
              type="text"
              value={novoAnimal.observacoes}
              onChange={e => setNovoAnimal({ ...novoAnimal, observacoes: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
          >
            Adicionar Animal
          </button>
        </div>
      </form>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brinco</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Nasc.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Raça</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sexo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {animais.map(animal => (
              <tr key={animal.id}>
                <td className="px-6 py-4 whitespace-nowrap">{animal.brinco}</td>
                <td className="px-6 py-4 whitespace-nowrap">{animal.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {animal.dataNascimento?.toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{animal.raca}</td>
                <td className="px-6 py-4 whitespace-nowrap">{animal.sexo === 'M' ? 'Macho' : 'Fêmea'}</td>
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