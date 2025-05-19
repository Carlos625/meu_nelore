import { Timestamp } from 'firebase/firestore'

export enum AnimalStatus {
  ATIVO = 'ativo',
  VENDIDO = 'vendido',
  ABATIDO = 'abatido',
  MORTO = 'morto'
}

export enum IncidenteStatus {
  PENDENTE = 'pendente',
  RESOLVIDO = 'resolvido'
}

export enum IncidenteTipo {
  DOENCA = 'doenca',
  FERIMENTO = 'ferimento',
  OUTRO = 'outro'
}

export interface Animal {
  id: string
  numeroBrinco: string
  corBrinco: 'amarelo' | 'verde' | 'azul' | 'vermelho'
  dataEntrada: Date | Timestamp
  dataNascimento?: Date | Timestamp
  raca: string
  sexo?: 'M' | 'F'
  status: AnimalStatus
  observacoes?: string
  foto?: string
  createdAt: Date | Timestamp
  updatedAt: Date | Timestamp
}

export interface Incidente {
  id: string
  animalId: string
  animalBrinco: string
  data: Date | Timestamp
  tipo: IncidenteTipo
  descricao: string
  status: IncidenteStatus
  createdAt: Date | Timestamp
  updatedAt: Date | Timestamp
}

export interface Configuracao {
  id: string
  quantidadeTotalBrinco: number
  updatedAt: Date | Timestamp
}

export interface PaginationParams {
  page: number
  limit: number
  total: number
}

export interface ApiResponse<T> {
  data: T
  error?: string
  message?: string
} 