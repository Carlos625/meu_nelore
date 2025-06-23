import Dexie, { Table } from 'dexie'
import { Animal, Incidente, Vacina } from '../types/indexedDB'

// Tipos antigos com ID numérico (v1)
interface OldAnimal {
  id?: number
  brinco: number
  corBrinco: string
  raca: string
  idade: number
  status: string
  dataEntrada: Date
  dataSaida?: Date
  motivoSaida?: string
}

interface OldIncidente {
  id?: number
  animalId: number
  tipo: string
  status: string
  data: Date
  descricao: string
}

interface OldVacina {
  id?: number
  animalBrinco: number
  tipo: string
  dataAplicacao: Date
  dataProxima?: Date
  observacoes?: string
}

class MeuNeloreDB extends Dexie {
  animais!: Table<Animal, string>
  incidentes!: Table<Incidente, string>
  vacinas!: Table<Vacina, string>
  usuarios!: Table<{ id?: number; username: string; senha: string }, number>

  constructor() {
    super('MeuNeloreDB')

    // Versão 1 - estrutura original
    this.version(1).stores({
      animais: '++id, brinco, status',
      incidentes: '++id, animalId, data, tipo',
      vacinas: '++id, animalBrinco, dataAplicacao, dataProxima',
      usuarios: '++id, username'
    })

    // Versão 2 - migração para IDs string e estrutura final
    this.version(2)
      .stores({
        animais: 'id, numeroBrinco, status',
        incidentes: 'id, animalId, data, tipo',
        vacinas: 'id, animalBrinco, dataAplicacao, dataProxima',
        usuarios: '++id, username'
      })
      .upgrade(async (trans) => {
        console.log('🚀 Iniciando migração para versão 2...')

        const oldAnimais = await trans.table('animais').toArray() as OldAnimal[]
        const oldIncidentes = await trans.table('incidentes').toArray() as OldIncidente[]
        const oldVacinas = await trans.table('vacinas').toArray() as OldVacina[]

        // Limpa as tabelas para reescrita com novos formatos
        await trans.table('animais').clear()
        await trans.table('incidentes').clear()
        await trans.table('vacinas').clear()

        const idMap = new Map<number, string>()

        // Migrar animais
        for (const old of oldAnimais) {
          if (old.id === undefined) continue

          const newId = `animal-${old.id}`
          idMap.set(old.id, newId)

          const animal: Animal = {
            id: newId,
            numeroBrinco: old.brinco.toString(),
            corBrinco: old.corBrinco as Animal['corBrinco'],
            raca: old.raca,
            idade: old.idade,
            status: old.status.toLowerCase() as Animal['status'],
            dataEntrada: old.dataEntrada,
            dataSaida: old.dataSaida,
            motivoSaida: old.motivoSaida,
            observacoes: '',
            foto: ''
          }

          await trans.table('animais').add(animal)
        }

        // Migrar incidentes
        for (const old of oldIncidentes) {
          if (old.id === undefined) continue

          const incidente: Incidente = {
            id: `incidente-${old.id}`,
            animalId: idMap.get(old.animalId) || `animal-${old.animalId}`,
            tipo: old.tipo.toLowerCase() as Incidente['tipo'],
            descricao: old.descricao,
            data: old.data,
            status: old.status.toLowerCase() as Incidente['status'],
            foto: '',
            observacoes: ''
          }

          await trans.table('incidentes').add(incidente)
        }

        // Migrar vacinas
        for (const old of oldVacinas) {
          if (old.id === undefined) continue

          const vacina: Vacina = {
            id: `vacina-${old.id}`,
            animalBrinco: old.animalBrinco.toString(),
            nome: old.tipo,
            dataAplicacao: old.dataAplicacao,
            dataProxima: old.dataProxima,
            observacoes: old.observacoes || '',
            createdAt: new Date(),
            updatedAt: new Date()
          }

          await trans.table('vacinas').add(vacina)
        }

        console.log('✅ Migração para versão 2 concluída!')
      })

    // Versão 3 - mantém estrutura definitiva (sem upgrade)
    this.version(3).stores({
      animais: 'id, numeroBrinco, status',
      incidentes: 'id, animalId, data, tipo',
      vacinas: 'id, animalBrinco, dataAplicacao, dataProxima',
      usuarios: '++id, username'
    })
  }
}

export const db = new MeuNeloreDB()
