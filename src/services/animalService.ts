import { Animal } from '../types/animal'
import { db } from './indexedDB'

export const animalService = {
  async getAll(): Promise<Animal[]> {
    try {
      const animais = await db.animais.toArray()
      return animais
    } catch (error) {
      console.error('Erro ao buscar animais:', error)
      return []
    }
  },

  async getByBrinco(brinco: number): Promise<Animal | undefined> {
    try {
      const animal = await db.animais.get(brinco)
      return animal
    } catch (error) {
      console.error('Erro ao buscar animal:', error)
      return undefined
    }
  },

  async create(animal: Omit<Animal, 'id'>): Promise<Animal | undefined> {
    try {
      const id = await db.animais.add(animal)
      return { ...animal, id }
    } catch (error) {
      console.error('Erro ao criar animal:', error)
      return undefined
    }
  },

  async update(brinco: number, animal: Partial<Animal>): Promise<boolean> {
    try {
      await db.animais.update(brinco, animal)
      return true
    } catch (error) {
      console.error('Erro ao atualizar animal:', error)
      return false
    }
  },

  async delete(brinco: number): Promise<boolean> {
    try {
      await db.animais.delete(brinco)
      return true
    } catch (error) {
      console.error('Erro ao deletar animal:', error)
      return false
    }
  },

  async getById(id: number): Promise<Animal | undefined> {
    try {
      const animal = await db.animais.get(id)
      return animal
    } catch (error) {
      console.error('Erro ao buscar animal por id:', error)
      return undefined
    }
  }
} 