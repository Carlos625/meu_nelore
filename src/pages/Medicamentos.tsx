import { useState, useEffect } from 'react'
import { getAnimais } from '../services/firestore'
import { Animal } from '../types'

interface Medicamento {
  id: string
  animalBrinco: string
  nome: string
  dosagem: string
  dataAplicacao: Date | string
  observacoes?: string
}

export default function Medicamentos() {
  const [medicamentos] = useState<Medicamento[]>([])
  const [animais, setAnimais] = useState<Animal[]>([])

  useEffect(() => {
    carregarDados()
  }, [])

  async function carregarDados() {
    try {
      const dadosAnimais = await getAnimais()
      setAnimais(dadosAnimais)
      // TODO: Implementar carregamento de medicamentos
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Medicamentos</h1>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Animal</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicamento</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosagem</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Observações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {medicamentos.map(medicamento => {
              const animal = animais.find(a => a.numeroBrinco === medicamento.animalBrinco)
              return (
                <tr key={medicamento.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {animal ? `${animal.numeroBrinco} - ${animal.raca || 'Sem nome'}` : 'Animal não encontrado'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{medicamento.nome || 'Não informado'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{medicamento.dosagem || 'Não informada'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {medicamento.dataAplicacao instanceof Date 
                      ? medicamento.dataAplicacao.toLocaleDateString('pt-BR')
                      : typeof medicamento.dataAplicacao === 'string'
                        ? new Date(medicamento.dataAplicacao).toLocaleDateString('pt-BR')
                        : 'Data não informada'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{medicamento.observacoes || '-'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
} 