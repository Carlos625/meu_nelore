import { addAnimal, getAnimais, updateAnimal, deleteAnimal } from './firestore'
import { Animal } from '../types'

export const animalService = {
  async addAnimal(animal: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>) {
    try {
      const newAnimal = await addAnimal(animal)
      return newAnimal
    } catch (error) {
      console.error('Erro ao adicionar animal:', error)
      throw error
    }
  },

  async getAnimais() {
    try {
      const animais = await getAnimais()
      return animais
    } catch (error) {
      console.error('Erro ao buscar animais:', error)
      throw error
    }
  },

  async updateAnimal(id: string, animal: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>) {
    try {
      await updateAnimal(id, animal)
    } catch (error) {
      console.error('Erro ao atualizar animal:', error)
      throw error
    }
  },

  async deleteAnimal(id: string) {
    try {
      await deleteAnimal(id)
    } catch (error) {
      console.error('Erro ao deletar animal:', error)
      throw error
    }
  }
} 