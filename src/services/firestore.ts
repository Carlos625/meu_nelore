import { db, storage } from './firebase'
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query, 
  where,
  Timestamp,
  limit,
  orderBy
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { Animal, Incidente, Configuracao, AnimalStatus, IncidenteStatus, IncidenteTipo } from '../types'

// Função auxiliar para converter Timestamp para Date
function toDate(value: Date | Timestamp | undefined): Date | undefined {
  if (value instanceof Timestamp) {
    return value.toDate()
  }
  if (value instanceof Date) {
    return value
  }
  return undefined
}

// Função auxiliar para converter Date para Timestamp
function toTimestamp(value: Date | Timestamp | undefined): Timestamp | undefined {
  if (value instanceof Timestamp) {
    return value
  }
  if (value instanceof Date) {
    return Timestamp.fromDate(value)
  }
  return undefined
}

// Tipos
export interface Vacina {
  id?: string
  animalBrinco: string
  nome: string
  dataAplicacao: Date | Timestamp
  dataProxima?: Date | Timestamp
  observacoes?: string
  createdAt: Date | Timestamp
  updatedAt: Date | Timestamp
}

// Funções para Animais
export const animaisCollection = collection(db, 'animais')

export async function getAnimal(id: string): Promise<Animal> {
  try {
    const docRef = doc(db, 'animais', id)
    const docSnap = await getDoc(docRef)
    
    if (!docSnap.exists()) {
      throw new Error('Animal não encontrado')
    }

    const data = docSnap.data()
    return {
      id: docSnap.id,
      numeroBrinco: data.numeroBrinco?.toString() || '',
      corBrinco: data.corBrinco || 'amarelo',
      dataEntrada: toDate(data.dataEntrada) || new Date(),
      dataNascimento: toDate(data.dataNascimento),
      raca: data.raca || '',
      sexo: data.sexo,
      status: data.status || AnimalStatus.ATIVO,
      observacoes: data.observacoes,
      foto: data.foto,
      createdAt: toDate(data.createdAt) || new Date(),
      updatedAt: toDate(data.updatedAt) || new Date()
    } as Animal
  } catch (error) {
    console.error('Erro ao buscar animal:', error)
    throw error
  }
}

export async function addAnimal(animal: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>) {
  try {
    console.log('Iniciando adição do animal:', animal)

    const animalData = {
      ...animal,
      numeroBrinco: animal.numeroBrinco.toString(),
      dataEntrada: animal.dataEntrada ? Timestamp.fromDate(new Date(animal.dataEntrada)) : null,
      dataNascimento: animal.dataNascimento ? Timestamp.fromDate(new Date(animal.dataNascimento)) : null,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    }

    // Remove campos com `undefined` (Firestore não aceita)
    Object.keys(animalData).forEach((key) => {
      if (animalData[key as keyof typeof animalData] === undefined) {
        delete animalData[key as keyof typeof animalData]
      }
    })

    const docRef = await addDoc(collection(db, 'animais'), animalData)
    console.log('Animal adicionado com sucesso! ID:', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('Erro ao adicionar animal:', error)
    throw error
  }
}

export async function updateAnimal(id: string, animal: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>) {
  try {
    const animalData = {
      ...animal,
      numeroBrinco: animal.numeroBrinco.toString(),
      dataEntrada: animal.dataEntrada ? Timestamp.fromDate(new Date(animal.dataEntrada)) : null,
      dataNascimento: animal.dataNascimento ? Timestamp.fromDate(new Date(animal.dataNascimento)) : null,
      updatedAt: Timestamp.now()
    }

    Object.keys(animalData).forEach((key) => {
      if (animalData[key as keyof typeof animalData] === undefined) {
        delete animalData[key as keyof typeof animalData]
      }
    })

    const docRef = doc(db, 'animais', id)
    await updateDoc(docRef, animalData)
    console.log('Animal atualizado com sucesso!')
  } catch (error) {
    console.error('Erro ao atualizar animal:', error)
    throw error
  }
}

export async function deleteAnimal(id: string) {
  const animalRef = doc(db, 'animais', id)
  await deleteDoc(animalRef)
}

export async function getAnimais() {
  try {
    const q = query(collection(db, 'animais'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => {
      const data = doc.data()
      return {
        id: doc.id,
        numeroBrinco: data.numeroBrinco?.toString() || '',
        corBrinco: data.corBrinco || 'amarelo',
        dataEntrada: toDate(data.dataEntrada) || new Date(),
        dataNascimento: toDate(data.dataNascimento),
        raca: data.raca || '',
        sexo: data.sexo,
        status: data.status || AnimalStatus.ATIVO,
        observacoes: data.observacoes,
        foto: data.foto,
        createdAt: toDate(data.createdAt) || new Date(),
        updatedAt: toDate(data.updatedAt) || new Date()
      } as Animal
    })
  } catch (error) {
    console.error('Erro ao buscar animais:', error)
    throw error
  }
}

// Funções para Incidentes
export const incidentesCollection = collection(db, 'incidentes')

export async function addIncidente(incidente: Omit<Incidente, 'id' | 'createdAt' | 'updatedAt'>) {
  const docRef = await addDoc(collection(db, 'incidentes'), {
    ...incidente,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  })
  return docRef.id
}

export async function updateIncidente(id: string, data: Partial<Incidente>) {
  const incidenteRef = doc(db, 'incidentes', id)
  await updateDoc(incidenteRef, {
    ...data,
    updatedAt: Timestamp.now()
  })
}

export async function getIncidentes(animalId: string) {
  const q = query(incidentesCollection, where('animalId', '==', animalId))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Incidente[]
}

export async function getAllIncidentes() {
  const q = query(incidentesCollection)
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Incidente[]
}

export async function deleteIncidente(id: string) {
  try {
    const incidenteRef = doc(db, 'incidentes', id)
    await deleteDoc(incidenteRef)
  } catch (error) {
    console.error('Erro ao excluir incidente:', error)
    throw error
  }
}

// Funções para Vacinas
export const vacinasCollection = collection(db, 'vacinas')

export async function addVacina(vacina: Omit<Vacina, 'id' | 'createdAt' | 'updatedAt'>) {
  try {
    console.log('Iniciando adição de vacina...', vacina)
    
    // Validar dados antes de salvar
    if (!vacina.animalBrinco) throw new Error('Brinco do animal é obrigatório')
    if (!vacina.nome) throw new Error('Nome da vacina é obrigatório')
    if (!vacina.dataAplicacao) throw new Error('Data de aplicação é obrigatória')
    
    const now = new Date()
    console.log('Data atual:', now)
    
    // Converter datas para Timestamp
    const dataAplicacaoTimestamp = toTimestamp(vacina.dataAplicacao) || Timestamp.now()
    const dataProximaTimestamp = toTimestamp(vacina.dataProxima)
    
    console.log('Datas convertidas:', {
      dataAplicacao: dataAplicacaoTimestamp,
      dataProxima: dataProximaTimestamp
    })
    
    const vacinaData = {
      animalBrinco: vacina.animalBrinco,
      nome: vacina.nome,
      dataAplicacao: dataAplicacaoTimestamp,
      dataProxima: dataProximaTimestamp,
      observacoes: vacina.observacoes,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    }
    
    const docRef = await addDoc(vacinasCollection, vacinaData)
    return docRef.id
  } catch (error) {
    console.error('Erro ao adicionar vacina:', error)
    throw error
  }
}

export async function getVacinas(animalBrinco: string) {
  try {
    const q = query(
      vacinasCollection,
      where('animalBrinco', '==', animalBrinco),
      orderBy('dataAplicacao', 'desc')
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => {
      const data = doc.data()
      return {
        id: doc.id,
        animalBrinco: data.animalBrinco,
        nome: data.nome,
        dataAplicacao: toDate(data.dataAplicacao) || new Date(),
        dataProxima: toDate(data.dataProxima),
        observacoes: data.observacoes,
        createdAt: toDate(data.createdAt) || new Date(),
        updatedAt: toDate(data.updatedAt) || new Date()
      } as Vacina
    })
  } catch (error) {
    console.error('Erro ao buscar vacinas:', error)
    throw error
  }
}

// Funções para Configurações
export const configuracoesCollection = collection(db, 'configuracoes')

export async function getConfiguracao() {
  try {
    const docRef = doc(db, 'configuracao', 'geral')
    const docSnap = await getDoc(docRef)
    
    if (!docSnap.exists()) {
      return null
    }

    const data = docSnap.data()
    return {
      id: docSnap.id,
      quantidadeTotalBrinco: data.quantidadeTotalBrinco || 300,
      createdAt: toDate(data.createdAt) || new Date(),
      updatedAt: toDate(data.updatedAt) || new Date()
    } as Configuracao
  } catch (error) {
    console.error('Erro ao buscar configuração:', error)
    throw error
  }
}

export async function updateConfiguracao(config: Partial<Configuracao>) {
  try {
    const configRef = doc(db, 'configuracao', 'geral')
    await updateDoc(configRef, {
      ...config,
      updatedAt: Timestamp.now()
    })
  } catch (error) {
    console.error('Erro ao atualizar configuração:', error)
    throw error
  }
}

// Funções para limpar dados
export async function limparDados() {
  try {
    // Limpar animais
    const animaisSnapshot = await getDocs(animaisCollection)
    const animaisPromises = animaisSnapshot.docs.map(doc => deleteDoc(doc.ref))
    await Promise.all(animaisPromises)

    // Limpar incidentes
    const incidentesSnapshot = await getDocs(incidentesCollection)
    const incidentesPromises = incidentesSnapshot.docs.map(doc => deleteDoc(doc.ref))
    await Promise.all(incidentesPromises)

    // Limpar vacinas
    const vacinasSnapshot = await getDocs(vacinasCollection)
    const vacinasPromises = vacinasSnapshot.docs.map(doc => deleteDoc(doc.ref))
    await Promise.all(vacinasPromises)

    console.log('Dados limpos com sucesso!')
  } catch (error) {
    console.error('Erro ao limpar dados:', error)
    throw error
  }
}