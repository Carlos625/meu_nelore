import { db } from '../config/firebase'
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  where,
  Timestamp 
} from 'firebase/firestore'

// Tipos
export interface Animal {
  id?: string
  brinco: string
  nome?: string
  dataNascimento?: Date
  raca?: string
  sexo?: 'M' | 'F'
  status: 'Ativo' | 'Vendido' | 'Abatido' | 'Morto'
  observacoes?: string
  createdAt: Date
  updatedAt: Date
}

export interface Incidente {
  id?: string
  animalId: string
  data: Date
  tipo: string
  descricao: string
  createdAt: Date
  updatedAt: Date
}

export interface Vacina {
  id?: string
  animalBrinco: string
  nome: string
  dataAplicacao: Date
  dataProxima?: Date
  observacoes?: string
  createdAt: Date
  updatedAt: Date
}

// Funções para Animais
export const animaisCollection = collection(db, 'animais')

export async function addAnimal(animal: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>) {
  try {
    console.log('Iniciando adição de animal...')
    const now = new Date()
    const animalData = {
      ...animal,
      createdAt: now,
      updatedAt: now
    }
    console.log('Dados do animal:', animalData)
    
    const docRef = await addDoc(animaisCollection, animalData)
    console.log('Animal adicionado com sucesso! ID:', docRef.id)
    
    return { id: docRef.id, ...animalData }
  } catch (error) {
    console.error('ERRO ao adicionar animal:', error)
    throw error
  }
}

export async function updateAnimal(id: string, animal: Partial<Animal>) {
  const animalRef = doc(db, 'animais', id)
  const updateData = {
    ...animal,
    updatedAt: new Date()
  }
  await updateDoc(animalRef, updateData)
  return { id, ...updateData }
}

export async function deleteAnimal(id: string) {
  const animalRef = doc(db, 'animais', id)
  await deleteDoc(animalRef)
}

export async function getAnimais() {
  try {
    console.log('Iniciando busca de animais...')
    const querySnapshot = await getDocs(animaisCollection)
    console.log('Documentos encontrados:', querySnapshot.size)
    
    const animais = querySnapshot.docs.map(doc => {
      const data = doc.data()
      console.log('Dados do documento:', doc.id, data)
      return {
        id: doc.id,
        ...data
      }
    }) as Animal[]
    
    console.log('Animais processados:', animais)
    return animais
  } catch (error) {
    console.error('ERRO ao buscar animais:', error)
    throw error
  }
}

// Funções para Incidentes
export const incidentesCollection = collection(db, 'incidentes')

export async function addIncidente(incidente: Omit<Incidente, 'id' | 'createdAt' | 'updatedAt'>) {
  const now = new Date()
  const incidenteData = {
    ...incidente,
    createdAt: now,
    updatedAt: now
  }
  const docRef = await addDoc(incidentesCollection, incidenteData)
  return { id: docRef.id, ...incidenteData }
}

export async function getIncidentes(animalId: string) {
  const q = query(incidentesCollection, where('animalId', '==', animalId))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Incidente[]
}

// Funções para Vacinas
export const vacinasCollection = collection(db, 'vacinas')

export async function addVacina(vacina: Omit<Vacina, 'id' | 'createdAt' | 'updatedAt'>) {
  const now = new Date()
  const vacinaData = {
    ...vacina,
    createdAt: now,
    updatedAt: now
  }
  const docRef = await addDoc(vacinasCollection, vacinaData)
  return { id: docRef.id, ...vacinaData }
}

export async function getVacinas(animalBrinco: string) {
  const q = query(vacinasCollection, where('animalBrinco', '==', animalBrinco))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Vacina[]
} 