import { useState } from "react"

const coresBrinco = [
  { id: 'amarelo', nome: 'Amarelo', cor: 'bg-yellow-400' },
  { id: 'verde', nome: 'Verde', cor: 'bg-green-500' },
  { id: 'azul', nome: 'Azul', cor: 'bg-blue-500' },
  { id: 'vermelho', nome: 'Vermelho', cor: 'bg-red-500' }
] 



const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
}

const [formData, setFormData] = useState({
  numeroBrinco: '',
  corBrinco: 'amarelo'
})



export const AnimalForm = () => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
        <label className="block text-sm font-medium text-gray-700">Número do Brinco</label>
        <input
          type="text"
          value={formData.numeroBrinco}
          onChange={e => setFormData({ ...formData, numeroBrinco: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Cor do Brinco</label>
        <select
          value={formData.corBrinco}
          onChange={e => setFormData({ ...formData, corBrinco: e.target.value as 'amarelo' | 'verde' | 'azul' | 'vermelho' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        >
          {coresBrinco.map(cor => (
            <option key={cor.id} value={cor.id}>
              {cor.nome}
            </option>
          ))}
        </select>
      </div>
    </div>
  </form>
) 
}