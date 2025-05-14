import { useState } from 'react'

interface BrincoModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (quantidade: number) => void
  quantidadeAtual: number
}

export default function BrincoModal({ isOpen, onClose, onSave, quantidadeAtual }: BrincoModalProps) {
  const [quantidade, setQuantidade] = useState(quantidadeAtual)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(quantidade)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Ajustar Quantidade de Brincos</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantidade Total de Brincos
            </label>
            <input
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(Number(e.target.value))}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              min="0"
              required
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
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
      </div>
    </div>
  )
} 