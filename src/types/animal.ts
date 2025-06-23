export type AnimalStatus = 'ativo' | 'vendido' | 'abatido' | 'morto'

export interface Animal {
  id: number
  numeroBrinco: number
  corBrinco: 'azul' | 'verde' | 'amarelo' | 'vermelho'
  raca: string
  idade: number
  status: AnimalStatus
  dataEntrada: Date
  dataSaida?: Date
  foto?: string
  observacoes?: string
} 