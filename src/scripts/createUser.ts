import { db } from '../services/indexedDB'

async function createUser() {
  await db.usuarios.add({
    username: 'Carlos',
    senha: '+C123456'
  })
  console.log('Usuário criado!')
}

createUser() 