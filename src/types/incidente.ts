export type IncidenteTipo = 'doenca' | 'acidente' | 'tratamento' | 'outro'
export type IncidenteStatus = 'pendente' | 'resolvido' | 'cancelado'

export interface Incidente {
  id: number
  animalId: number
  tipo: IncidenteTipo
  status: IncidenteStatus
  data: string
  descricao: string
  foto?: string
  observacoes?: string
} 