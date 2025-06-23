// src/types/indexedDB.ts
export interface Animal {
  id: string
  numeroBrinco: string
  corBrinco: 'amarelo' | 'verde' | 'azul' | 'vermelho'
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
  tipo: 'doença' | 'ferimento' | 'tratamento' | 'vacinação'
  descricao: string
  data: Date
  foto?: string
  observacoes?: string
  status: 'pendente' | 'resolvido'
}

export interface Vacina {
  id: string
  animalBrinco: string
  nome: string
  dataAplicacao: Date
  dataProxima?: Date
  observacoes?: string
  createdAt: Date
  updatedAt: Date
}
