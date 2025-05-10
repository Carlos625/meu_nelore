import Dexie, { Table } from 'dexie'
import { Animal } from '../types/animal'
import { Incidente } from '../types/incidente'
import { Vacina } from '../types/vacina'

class MeuNeloreDB extends Dexie {
  animais!: Table<Animal>
  incidentes!: Table<Incidente>
  vacinas!: Table<Vacina>
  usuarios!: Table<{ id?: number, username: string, senha: string }>

  constructor() {
    super('MeuNeloreDB')
    this.version(1).stores({
      animais: '++id, brinco, status',
      incidentes: '++id, animalId, data, tipo',
      vacinas: '++id, animalBrinco, dataAplicacao, dataProxima',
      usuarios: '++id, username'
    })
  }
}

export const db = new MeuNeloreDB() 