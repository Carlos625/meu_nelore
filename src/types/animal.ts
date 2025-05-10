export type AnimalStatus = 'ativo' | 'vendido' | 'abatido' | 'morto'

export interface Animal {
  id: number
  brinco: number
  corBrinco: 'azul' | 'verde' | 'amarelo'
  raca: string
  idade: number
  status: AnimalStatus
  dataEntrada: Date
  dataSaida?: Date
  foto?: string
  observacoes?: string
} 