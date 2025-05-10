export interface Animal {
  id: string
  brinco: number
  raca: string
  idade: number
  foto?: string
  status: 'ativo' | 'vendido' | 'abatido' | 'morto'
  dataEntrada: Date
  dataSaida?: Date
  motivoSaida?: string
  observacoes?: string
}

export interface Incidente {
  id: string
  animalId: string
  tipo: 'doenca' | 'acidente' | 'outro'
  descricao: string
  data: Date
  foto?: string
  observacoes?: string
  status: 'pendente' | 'resolvido'
}

export interface SyncQueue {
  id: string
  tipo: 'animal' | 'incidente'
  operacao: 'create' | 'update' | 'delete'
  dados: any
  timestamp: Date
  status: 'pendente' | 'sincronizado' | 'erro'
} 