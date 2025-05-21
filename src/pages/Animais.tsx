import { useState, useEffect } from 'react'
import { getAnimais, addAnimal, updateAnimal, deleteAnimal } from '../services/firestore'
import { Animal, AnimalStatus } from '../types'
import { Timestamp } from 'firebase/firestore'
import { AnimalForm } from './AnimalForm'
import Pagination from '../components/Pagination'
import Toast from '../components/Toast'
import ConfirmDialog from '../components/ConfirmDialog'
import { PaginationParams } from '../types'

export default function Animais() {
  const [animais, setAnimais] = useState<Animal[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: 10,
    total: 0
  })
  const [toast, setToast] = useState<{
    show: boolean
    type: 'success' | 'error' | 'warning' | 'info'
    message: string
  }>({
    show: false,
    type: 'info',
    message: ''
  })
  const [confirmDialog, setConfirmDialog] = useState<{ show: boolean; animalId: string }>({ show: false, animalId: '' })
  const [animalParaEditar, setAnimalParaEditar] = useState<Animal | undefined>(undefined)

  useEffect(() => {
    carregarAnimais()
  }, [])

  const carregarAnimais = async () => {
    try {
      const data = await getAnimais()
      setAnimais(data)
    } catch (error) {
      console.error('Erro ao carregar animais:', error)
      setErro('Erro ao carregar lista de animais')
    } finally {
      setLoading(false)
    }
  }

  const coresBrinco = [
    { id: 'amarelo', nome: 'Amarelo', cor: 'bg-yellow-400' },
    { id: 'verde', nome: 'Verde', cor: 'bg-green-500' },
    { id: 'azul', nome: 'Azul', cor: 'bg-blue-500' },
    { id: 'vermelho', nome: 'Vermelho', cor: 'bg-red-500' }
  ]


  const handleSalvarAnimal = async (animalData: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      console.log('Iniciando salvamento do animal...', JSON.stringify(animalData, null, 2))
      
      // Garantir que os dados estejam no formato correto
      const animalToSave = {
        ...animalData,
        dataEntrada: animalData.dataEntrada instanceof Timestamp 
          ? animalData.dataEntrada 
          : Timestamp.fromDate(new Date(animalData.dataEntrada))
      }

      await addAnimal(animalToSave)
      console.log('Animal salvo com sucesso!')
      await carregarAnimais()
      setShowForm(false)
      
      setToast({
        show: true,
        type: 'success',
        message: 'Animal salvo com sucesso!'
      })
    } catch (error) {
      console.error('Erro ao salvar animal:', error)
      setErro('Erro ao salvar animal')
      setToast({
        show: true,
        type: 'error',
        message: 'Erro ao salvar animal'
      })
    }
  }

  const handleEditarAnimal = async (animalData: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      if (!animalParaEditar?.id) {
        throw new Error('ID do animal não encontrado')
      }

      console.log('Iniciando edição do animal...', JSON.stringify(animalData, null, 2))
      
      // Garantir que os dados estejam no formato correto
      const animalToUpdate = {
        ...animalData,
        dataEntrada: animalData.dataEntrada instanceof Timestamp 
          ? animalData.dataEntrada 
          : Timestamp.fromDate(new Date(animalData.dataEntrada))
      }

      await updateAnimal(animalParaEditar.id, animalToUpdate)
      console.log('Animal atualizado com sucesso!')
      await carregarAnimais()
      setShowForm(false)
      setAnimalParaEditar(undefined)
      
      setToast({
        show: true,
        type: 'success',
        message: 'Animal atualizado com sucesso!'
      })
    } catch (error) {
      console.error('Erro ao atualizar animal:', error)
      setErro('Erro ao atualizar animal')
      setToast({
        show: true,
        type: 'error',
        message: 'Erro ao atualizar animal'
      })
    }
  }

  async function handleStatusChange(id: string, novoStatus: AnimalStatus) {
    try {
      await updateAnimal(id, { status: novoStatus })
      carregarAnimais()
      setToast({
        show: true,
        type: 'success',
        message: 'Status atualizado com sucesso!'
      })
    } catch (error) {
      console.error('Erro ao atualizar status:', error)
      setErro('Erro ao atualizar status')
      setToast({
        show: true,
        type: 'error',
        message: 'Erro ao atualizar status'
      })
    }
  }

  async function handleDelete(id: string) {
    try {
      await deleteAnimal(id)
      carregarAnimais()
      setToast({
        show: true,
        type: 'success',
        message: 'Animal excluído com sucesso!'
      })
    } catch (error) {
      console.error('Erro ao excluir animal:', error)
      setErro('Erro ao excluir animal')
      setToast({
        show: true,
        type: 'error',
        message: 'Erro ao excluir animal'
      })
    }
  }

  const animaisPaginados = animais.slice(
    (pagination.page - 1) * pagination.limit,
    pagination.page * pagination.limit
  )

  if (loading) {
    return <div className="p-4">Carregando...</div>
  }

  if (erro) {
    return <div className="text-red-500">{erro}</div>
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Animais</h1>
        <button
          onClick={() => {
            setAnimalParaEditar(undefined)
            setShowForm(true)
          }}
          className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
        >
          Novo Animal
        </button>
      </div>
      
      {showForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <AnimalForm
              onSubmit={animalParaEditar ? handleEditarAnimal : handleSalvarAnimal}
              onCancel={() => {
                setShowForm(false)
                setAnimalParaEditar(undefined)
              }}
              initialData={animalParaEditar}
            />
          </div>
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
            {animaisPaginados.map(animal => (
              <tr key={animal.id}>
                <td className="px-6 py-4 whitespace-nowrap">{animal.numeroBrinco || ''}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`w-4 h-4 rounded-full ${coresBrinco.find(cor => cor.id === animal.corBrinco)?.cor || 'bg-gray-300'}`}></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {animal.dataEntrada instanceof Timestamp 
                    ? animal.dataEntrada.toDate().toLocaleDateString('pt-BR')
                    : animal.dataEntrada instanceof Date
                      ? animal.dataEntrada.toLocaleDateString('pt-BR')
                      : new Date(animal.dataEntrada).toLocaleDateString('pt-BR')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{animal.raca || ''}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={animal.status || AnimalStatus.ATIVO}
                    onChange={e => handleStatusChange(animal.id, e.target.value as AnimalStatus)}
                    className="rounded border-gray-300"
                  >
                    {Object.values(AnimalStatus).map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button
                    onClick={() => {
                      setAnimalParaEditar(animal)
                      setShowForm(true)
                    }}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => setConfirmDialog({ show: true, animalId: animal.id })}
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

      <Pagination
        pagination={pagination}
        onPageChange={page => setPagination(prev => ({ ...prev, page }))}
      />

      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />

      <ConfirmDialog
        isOpen={confirmDialog.show}
        onClose={() => setConfirmDialog({ show: false, animalId: '' })}
        onConfirm={() => confirmDialog.animalId && handleDelete(confirmDialog.animalId)}
        title="Excluir Animal"
        message="Tem certeza que deseja excluir este animal? Esta ação não pode ser desfeita."
        confirmText="Excluir"
        cancelText="Cancelar"
      />
    </div>
  )
} 