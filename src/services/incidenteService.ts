import { addIncidente, getIncidentes, getAllIncidentes, updateIncidente, deleteIncidente } from './firestore'
import { Incidente } from '../types'

export const incidenteService = {
  async addIncidente(incidente: Omit<Incidente, 'id' | 'createdAt' | 'updatedAt'>) {
    try {
      const newIncidente = await addIncidente(incidente)
      return newIncidente
    } catch (error) {
      console.error('Erro ao adicionar incidente:', error)
      throw error
    }
  },

  async getIncidentes(animalId: string) {
    try {
      const incidentes = await getIncidentes(animalId)
      return incidentes
    } catch (error) {
      console.error('Erro ao buscar incidentes:', error)
      throw error
    }
  },

  async getAllIncidentes() {
    try {
      const incidentes = await getAllIncidentes()
      return incidentes
    } catch (error) {
      console.error('Erro ao buscar todos os incidentes:', error)
      throw error
    }
  },

  async updateIncidente(id: string, incidente: Partial<Incidente>) {
    try {
      await updateIncidente(id, incidente)
    } catch (error) {
      console.error('Erro ao atualizar incidente:', error)
      throw error
    }
  },

  async deleteIncidente(id: string) {
    try {
      await deleteIncidente(id)
    } catch (error) {
      console.error('Erro ao deletar incidente:', error)
      throw error
    }
  }
} 