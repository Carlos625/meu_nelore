import { Vacina } from '../types/vacina'
import { db } from './indexedDB'

export const vacinaService = {
  async getAll(): Promise<Vacina[]> {
    try {
      return await db.vacinas.toArray()
    } catch (error) {
      console.error('Erro ao buscar vacinas:', error)
      return []
    }
  },
  async getByBrinco(animalBrinco: string): Promise<Vacina[]> {
    try {
      return await db.vacinas.where('animalBrinco').equals(animalBrinco).toArray()
    } catch (error) {
      console.error('Erro ao buscar vacinas do animal:', error)
      return []
    }
  },
  async create(vacina: Omit<Vacina, 'id'>): Promise<Vacina> {
    try {
      const id = await db.vacinas.add(vacina)
      return { ...vacina, id: id.toString() }
    } catch (error) {
      console.error('Erro ao criar vacina:', error)
      throw error
    }
  },
  async update(id: string, vacina: Partial<Vacina>): Promise<boolean> {
    try {
      await db.vacinas.update(Number(id), vacina)
      return true
    } catch (error) {
      console.error('Erro ao atualizar vacina:', error)
      return false
    }
  },
  async delete(id: string): Promise<boolean> {
    try {
      await db.vacinas.delete(Number(id))
      return true
    } catch (error) {
      console.error('Erro ao deletar vacina:', error)
      return false
    }
  }
} 