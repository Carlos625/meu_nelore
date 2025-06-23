import {
  addVacina,
  getVacinas,
  getAllVacinas,
  getVacinasByAnimalBrinco
} from './firestore'

import { Vacina } from '../types/vacina'

export const vacinaService = {
  async addVacina(vacina: Omit<Vacina, 'id'>) {
    try {
      const vacinaFormatada = {
        ...vacina,
        dataAplicacao: vacina.dataAplicacao instanceof Date
          ? vacina.dataAplicacao
          : new Date(vacina.dataAplicacao),
        dataProxima: vacina.dataProxima
          ? vacina.dataProxima instanceof Date
            ? vacina.dataProxima
            : new Date(vacina.dataProxima)
          : undefined
      }

      const id = await addVacina(vacinaFormatada)
      return id
    } catch (error) {
      console.error('Erro ao adicionar vacina:', error)
      throw error
    }
  },

  async getTodasVacinas(): Promise<Vacina[]> {
    try {
      return await getAllVacinas() as Vacina[]
    } catch (error) {
      console.error('Erro ao buscar todas as vacinas:', error)
      throw error
    }
  },

  async getVacinasPorBrinco(animalBrinco: string): Promise<Vacina[]> {
    try {
      return await getVacinas(animalBrinco) as Vacina[]
    } catch (error) {
      console.error('Erro ao buscar vacinas por brinco:', error)
      throw error
    }
  },

  async getVacinasBrutasPorBrinco(animalBrinco: string): Promise<Vacina[]> {
    try {
      return await getVacinasByAnimalBrinco(animalBrinco) as Vacina[]
    } catch (error) {
      console.error('Erro ao buscar vacinas brutas:', error)
      throw error
    }
  }
}
