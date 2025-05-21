import { db } from './indexedDB'
import { animalService } from './animalService'
import { incidenteService } from './incidenteService'
import { Animal as IndexedDBAnimal, Incidente as IndexedDBIncidente } from '../types/indexedDB'
import { Animal as FirebaseAnimal, Incidente as FirebaseIncidente } from '../types'

export const syncService = {
  async syncData() {
    try {
      // Sincronizar animais
      const animais = await animalService.getAnimais()
      const animaisIndexedDB: IndexedDBAnimal[] = animais.map(animal => ({
        id: animal.id,
        brinco: parseInt(animal.numeroBrinco),
        raca: animal.raca,
        idade: animal.dataNascimento ? 
          Math.floor((new Date().getTime() - (animal.dataNascimento instanceof Date ? 
            animal.dataNascimento.getTime() : animal.dataNascimento.toDate().getTime())) / (1000 * 60 * 60 * 24 * 365)) : 0,
        foto: animal.foto,
        status: animal.status.toLowerCase() as 'ativo' | 'vendido' | 'abatido' | 'morto',
        dataEntrada: animal.dataEntrada instanceof Date ? animal.dataEntrada : animal.dataEntrada.toDate(),
        dataSaida: undefined,
        motivoSaida: undefined,
        observacoes: animal.observacoes
      }))
      await db.animais.clear()
      await db.animais.bulkAdd(animaisIndexedDB)

      // Sincronizar incidentes
      const incidentes = await incidenteService.getIncidentes('')
      const incidentesIndexedDB: IndexedDBIncidente[] = incidentes.map(incidente => ({
        id: incidente.id,
        animalId: incidente.animalId,
        tipo: incidente.tipo.toLowerCase() as 'doenca' | 'acidente' | 'outro',
        descricao: incidente.descricao,
        data: incidente.data instanceof Date ? incidente.data : incidente.data.toDate(),
        foto: undefined,
        observacoes: undefined,
        status: incidente.status.toLowerCase() as 'pendente' | 'resolvido'
      }))
      await db.incidentes.clear()
      await db.incidentes.bulkAdd(incidentesIndexedDB)

      return true
    } catch (error) {
      console.error('Erro ao sincronizar dados:', error)
      return false
    }
  }
} 