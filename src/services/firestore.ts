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
  Timestamp,
  limit
} from 'firebase/firestore'

// Tipos
export interface Animal {
  id?: string
  brinco: string
  nome?: string
  dataNascimento?: Date
  dataEntrada: Date
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
  animalBrinco: string
  data: Date
  tipo: string
  descricao: string
  status: 'pendente' | 'resolvido'
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

// Configurações do Sistema
export interface Configuracao {
  id?: string
  quantidadeTotalBrinco: number
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