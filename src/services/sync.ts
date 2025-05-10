import { db, storage } from '../config/firebase'
import { collection, doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { syncService } from './indexedDB'
import { Animal, Incidente } from '../types/indexedDB'

export const syncService = {
  async syncWithFirebase(): Promise<void> {
    const queue = await syncService.getQueue()
    const pendentes = queue.filter(item => item.status === 'pendente')

    for (const item of pendentes) {
      try {
        if (item.tipo === 'animal') {
          await this.syncAnimal(item)
        } else if (item.tipo === 'incidente') {
          await this.syncIncidente(item)
        }
        await syncService.updateQueueItem(item.id, 'sincronizado')
      } catch (error) {
        console.error('Erro na sincronização:', error)
        await syncService.updateQueueItem(item.id, 'erro')
      }
    }
  },

  async syncAnimal(item: any): Promise<void> {
    const { operacao, dados } = item
    const animalRef = doc(db, 'animais', dados.id)

    if (operacao === 'delete') {
      await deleteDoc(animalRef)
      return
    }

    // Upload da foto se existir
    let fotoUrl = dados.foto
    if (dados.foto && dados.foto.startsWith('data:')) {
      const fotoRef = ref(storage, `animais/${dados.id}/foto`)
      const response = await fetch(dados.foto)
      const blob = await response.blob()
      await uploadBytes(fotoRef, blob)
      fotoUrl = await getDownloadURL(fotoRef)
    }

    const animalData = {
      ...dados,
      foto: fotoUrl,
      dataEntrada: dados.dataEntrada.toISOString(),
      dataSaida: dados.dataSaida?.toISOString()
    }

    await setDoc(animalRef, animalData, { merge: true })
  },

  async syncIncidente(item: any): Promise<void> {
    const { operacao, dados } = item
    const incidenteRef = doc(db, 'incidentes', dados.id)

    if (operacao === 'delete') {
      await deleteDoc(incidenteRef)
      return
    }

    // Upload da foto se existir
    let fotoUrl = dados.foto
    if (dados.foto && dados.foto.startsWith('data:')) {
      const fotoRef = ref(storage, `incidentes/${dados.id}/foto`)
      const response = await fetch(dados.foto)
      const blob = await response.blob()
      await uploadBytes(fotoRef, blob)
      fotoUrl = await getDownloadURL(fotoRef)
    }

    const incidenteData = {
      ...dados,
      foto: fotoUrl,
      data: dados.data.toISOString()
    }

    await setDoc(incidenteRef, incidenteData, { merge: true })
  },

  async checkOnlineStatus(): Promise<boolean> {
    return navigator.onLine
  },

  startSyncInterval(): void {
    // Verifica a conexão a cada 5 minutos
    setInterval(async () => {
      const isOnline = await this.checkOnlineStatus()
      if (isOnline) {
        await this.syncWithFirebase()
      }
    }, 5 * 60 * 1000)
  }
} 