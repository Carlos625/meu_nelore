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
  async getByBrinco(animalBrinco: number): Promise<Vacina[]> {
    try {
      return await db.vacinas.where('animalBrinco').equals(animalBrinco).toArray()
    } catch (error) {
      console.error('Erro ao buscar vacinas do animal:', error)
      return []
    }
  },
  async create(vacina: Omit<Vacina, 'id'>): Promise<Vacina | undefined> {
    try {
      const id = await db.vacinas.add(vacina)
      return { ...vacina, id }
    } catch (error) {
      console.error('Erro ao criar vacina:', error)
      return undefined
    }
  },
  async update(id: number, vacina: Partial<Vacina>): Promise<boolean> {
    try {
      await db.vacinas.update(id, vacina)
      return true
    } catch (error) {
      console.error('Erro ao atualizar vacina:', error)
      return false
    }
  },
  async delete(id: number): Promise<boolean> {
    try {
      await db.vacinas.delete(id)
      return true
    } catch (error) {
      console.error('Erro ao deletar vacina:', error)
      return false
    }
  }
} 