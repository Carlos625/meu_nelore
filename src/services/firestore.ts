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

// Tipos
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
      dataEntrada: data.dataEntrada?.toDate?.() || data.dataEntrada,
      dataNascimento: data.dataNascimento?.toDate?.() || data.dataNascimento,
      raca: data.raca || '',
      sexo: data.sexo,
      status: data.status || AnimalStatus.ATIVO,
      observacoes: data.observacoes,
      foto: data.foto,
      createdAt: data.createdAt?.toDate?.() || data.createdAt,
      updatedAt: data.updatedAt?.toDate?.() || data.updatedAt
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
      dataEntrada: Timestamp.fromDate(new Date(animal.dataEntrada)),
      dataNascimento: animal.dataNascimento ? Timestamp.fromDate(new Date(animal.dataNascimento)) : null,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    }
    const docRef = await addDoc(collection(db, 'animais'), animalData)
    console.log('Animal adicionado com sucesso! ID:', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('Erro ao adicionar animal:', error)
    throw error
  }
}

export async function updateAnimal(id: string, data: Partial<Animal>) {
  try {
    const animalRef = doc(db, 'animais', id)
    const updateData = {
      ...data,
      numeroBrinco: data.numeroBrinco?.toString(),
      dataEntrada: data.dataEntrada ? Timestamp.fromDate(new Date(data.dataEntrada)) : undefined,
      dataNascimento: data.dataNascimento ? Timestamp.fromDate(new Date(data.dataNascimento)) : undefined,
      updatedAt: Timestamp.now()
    }
    await updateDoc(animalRef, updateData)
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
        dataEntrada: data.dataEntrada?.toDate?.() || data.dataEntrada,
        dataNascimento: data.dataNascimento?.toDate?.() || data.dataNascimento,
        raca: data.raca || '',
        sexo: data.sexo,
        status: data.status || AnimalStatus.ATIVO,
        observacoes: data.observacoes,
        foto: data.foto,
        createdAt: data.createdAt?.toDate?.() || data.createdAt,
        updatedAt: data.updatedAt?.toDate?.() || data.updatedAt
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
    const dataAplicacaoTimestamp = Timestamp.fromDate(new Date(vacina.dataAplicacao))
    const dataProximaTimestamp = vacina.dataProxima ? Timestamp.fromDate(new Date(vacina.dataProxima)) : null
    
    console.log('Datas convertidas:', {
      dataAplicacao: dataAplicacaoTimestamp,
      dataProxima: dataProximaTimestamp
    })
    
    const vacinaData = {
      animalBrinco: vacina.animalBrinco,
      nome: vacina.nome,
      dataAplicacao: dataAplicacaoTimestamp,
      dataProxima: dataProximaTimestamp,
      observacoes: vacina.observacoes || '',
      createdAt: Timestamp.fromDate(now),
      updatedAt: Timestamp.fromDate(now)
    }
    
    console.log('Dados formatados para salvar:', vacinaData)
    
    // Tentar salvar no Firestore com retry
    let retries = 3
    let lastError = null
    
    while (retries > 0) {
      try {
        console.log(`Tentativa ${4 - retries} de salvar no Firestore...`)
        const docRef = await addDoc(vacinasCollection, vacinaData)
        console.log('Vacina salva com sucesso! ID:', docRef.id)
        
        return { 
          id: docRef.id, 
          ...vacina,
          createdAt: now,
          updatedAt: now
        }
      } catch (error) {
        console.error(`Erro na tentativa ${4 - retries}:`, error)
        lastError = error
        retries--
        if (retries > 0) {
          console.log('Aguardando 1 segundo antes de tentar novamente...')
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      }
    }
    
    throw lastError || new Error('Falha ao salvar vacina após várias tentativas')
  } catch (error) {
    console.error('ERRO ao adicionar vacina:', error)
    if (error instanceof Error) {
      console.error('Mensagem de erro:', error.message)
      console.error('Stack trace:', error.stack)
    }
    throw error
  }
}

export async function getVacinas(animalBrinco: string) {
  const vacinasRef = collection(db, 'vacinas');
  let q;
  if (animalBrinco) {
    q = query(vacinasRef, where('animalBrinco', '==', animalBrinco));
  } else {
    q = query(vacinasRef);
  }
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      dataAplicacao: data.dataAplicacao?.toDate?.() || data.dataAplicacao,
      dataProxima: data.dataProxima?.toDate?.() || data.dataProxima,
      createdAt: data.createdAt?.toDate?.() || data.createdAt,
      updatedAt: data.updatedAt?.toDate?.() || data.updatedAt
    };
  }) as Vacina[];
}

// Funções para Configurações
export const configuracoesCollection = collection(db, 'configuracoes')

export async function getConfiguracao() {
  try {
    const q = query(configuracoesCollection, limit(1))
    const querySnapshot = await getDocs(q)
    
    if (querySnapshot.empty) {
      // Se não existir configuração, cria uma padrão
      const configPadrao: Omit<Configuracao, 'id'> = {
        quantidadeTotalBrinco: 300,
        updatedAt: new Date()
      }
      const docRef = await addDoc(configuracoesCollection, configPadrao)
      return { id: docRef.id, ...configPadrao }
    }

    const doc = querySnapshot.docs[0]
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      updatedAt: data.updatedAt?.toDate?.() || data.updatedAt
    } as Configuracao
  } catch (error) {
    console.error('Erro ao buscar configuração:', error)
    throw error
  }
}

export async function updateConfiguracao(config: Partial<Configuracao>) {
  try {
    const q = query(configuracoesCollection, limit(1))
    const querySnapshot = await getDocs(q)
    
    if (querySnapshot.empty) {
      throw new Error('Configuração não encontrada')
    }

    const docRef = doc(db, 'configuracoes', querySnapshot.docs[0].id)
    const updateData = {
      ...config,
      updatedAt: new Date()
    }
    
    await updateDoc(docRef, updateData)
    return { id: docRef.id, ...updateData }
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
    const limparAnimais = animaisSnapshot.docs.map(doc => 
      deleteDoc(doc.ref)
    )
    await Promise.all(limparAnimais)

    // Limpar vacinas
    const vacinasSnapshot = await getDocs(vacinasCollection)
    const limparVacinas = vacinasSnapshot.docs.map(doc => 
      deleteDoc(doc.ref)
    )
    await Promise.all(limparVacinas)

    // Limpar incidentes
    const incidentesSnapshot = await getDocs(incidentesCollection)
    const limparIncidentes = incidentesSnapshot.docs.map(doc => 
      deleteDoc(doc.ref)
    )
    await Promise.all(limparIncidentes)

    // Resetar configurações
    const configSnapshot = await getDocs(configuracoesCollection)
    const configPadrao: Omit<Configuracao, 'id'> = {
      quantidadeTotalBrinco: 300,
      updatedAt: new Date()
    }

    if (!configSnapshot.empty) {
      await updateDoc(doc(db, 'configuracoes', configSnapshot.docs[0].id), configPadrao)
    } else {
      await addDoc(configuracoesCollection, configPadrao)
    }

    return true
  } catch (error) {
    console.error('Erro ao limpar dados:', error)
    throw error
  }
}