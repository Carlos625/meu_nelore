import { Incidente } from '../types/incidente'
import { db } from './indexedDB'

export const incidenteService = {
  async getAll(): Promise<Incidente[]> {
    try {
      const incidentes = await db.incidentes.toArray()
      return incidentes
    } catch (error) {
      console.error('Erro ao buscar incidentes:', error)
      return []
    }
  },

  async getByAnimalId(animalId: number): Promise<Incidente[]> {
    try {
      const incidentes = await db.incidentes
        .where('animalId')
        .equals(animalId)
        .toArray()
      return incidentes
    } catch (error) {
      console.error('Erro ao buscar incidentes do animal:', error)
      return []
    }
  },

  async getById(id: number): Promise<Incidente | undefined> {
    try {
      const incidente = await db.incidentes.get(id)
      return incidente
    } catch (error) {
      console.error('Erro ao buscar incidente:', error)
      return undefined
    }
  },

  async create(incidente: Omit<Incidente, 'id'>): Promise<Incidente | undefined> {
    try {
      const id = await db.incidentes.add(incidente)
      return { ...incidente, id }
    } catch (error) {
      console.error('Erro ao criar incidente:', error)
      return undefined
    }
  },

  async update(id: number, incidente: Partial<Incidente>): Promise<boolean> {
    try {
      await db.incidentes.update(id, incidente)
      return true
    } catch (error) {
      console.error('Erro ao atualizar incidente:', error)
      return false
    }
  },

  async delete(id: number): Promise<boolean> {
    try {
      await db.incidentes.delete(id)
      return true
    } catch (error) {
      console.error('Erro ao deletar incidente:', error)
      return false
    }
  }
} 