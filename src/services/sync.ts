import { db } from './indexedDB'
import { animalService } from './animalService'
import { incidenteService } from './incidenteService'

import {
  Animal as LocalAnimal,
  Incidente as LocalIncidente,
} from '../types/indexedDB'

export const syncService = {
  async syncData() {
    try {
      // Sincronizar animais
      const animais = await animalService.getAnimais()
      const animaisIndexedDB: LocalAnimal[] = animais.map(animal => ({
        id: animal.id, // Mantido como string
        numeroBrinco: animal.numeroBrinco,
        corBrinco: animal.corBrinco,
        raca: animal.raca,
        idade: animal.dataNascimento
          ? Math.floor(
              (new Date().getTime() -
                (animal.dataNascimento instanceof Date
                  ? animal.dataNascimento.getTime()
                  : animal.dataNascimento.toDate().getTime())) /
                (1000 * 60 * 60 * 24 * 365)
            )
          : 0,
        foto: animal.foto,
        status: animal.status.toLowerCase() as LocalAnimal['status'],
        dataEntrada:
          animal.dataEntrada instanceof Date
            ? animal.dataEntrada
            : animal.dataEntrada.toDate(),
        dataSaida: undefined,
        motivoSaida: undefined,
        observacoes: animal.observacoes,
      }))
      await db.animais.clear()
      await db.animais.bulkAdd(animaisIndexedDB)

      // Sincronizar incidentes
      const incidentes = await incidenteService.getIncidentes('')
      const incidentesIndexedDB: LocalIncidente[] = incidentes.map(incidente => ({
        id: incidente.id, // Mantido como string
        animalId: incidente.animalId, // Mantido como string
        tipo: incidente.tipo.toLowerCase() as LocalIncidente['tipo'],
        descricao: incidente.descricao,
        data:
          incidente.data instanceof Date
            ? incidente.data
            : incidente.data.toDate(),
        foto: undefined,
        observacoes: undefined,
        status: incidente.status.toLowerCase() as LocalIncidente['status'],
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