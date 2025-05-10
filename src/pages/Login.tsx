import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro('')
    setLoading(true)

    if (!email || !senha) {
      setErro('Preencha todos os campos')
      setLoading(false)
      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, senha)
      localStorage.setItem('isLoggedIn', 'true')
      window.location.href = '/'
    } catch (error: any) {
      console.error('Erro ao fazer login:', error)
      if (error.code === 'auth/invalid-credential') {
        setErro('E-mail ou senha inválidos')
      } else if (error.code === 'auth/too-many-requests') {
        setErro('Muitas tentativas. Tente novamente mais tarde')
      } else {
        setErro('Erro ao fazer login. Tente novamente')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded shadow-md flex flex-col items-center">
        <img src="/Nelore.png" alt="Meu Nelore" className="w-32 h-32 mb-6" />
        <h1 className="text-2xl font-bold text-primary-600 mb-6">Meu Nelore</h1>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {erro && <div className="bg-red-100 text-red-700 p-2 rounded text-sm">{erro}</div>}
          <div>
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-primary-600 text-white rounded hover:bg-primary-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
} 