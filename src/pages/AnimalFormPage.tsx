import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AnimalForm } from './AnimalForm'
import { getAnimal, updateAnimal } from '../services/firestore'
import { Animal } from '../types'

export function AnimalFormPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [animal, setAnimal] = useState<Animal | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadAnimal() {
      if (id) {
        try {
          console.log('Carregando animal:', id)
          const animalData = await getAnimal(id)
          console.log('Animal carregado:', animalData)
          setAnimal(animalData)
        } catch (err) {
          console.error('Erro ao carregar animal:', err)
          setError('Erro ao carregar animal')
        }
      }
      setLoading(false)
    }

    loadAnimal()
  }, [id])

  const handleSubmit = async (data: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      if (id) {
        console.log('Atualizando animal:', id, data)
        await updateAnimal(id, data)
      }
      navigate('/animais')
    } catch (err) {
      console.error('Erro ao salvar animal:', err)
      setError('Erro ao salvar animal')
    }
  }

  if (loading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>Erro: {error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        {id ? 'Editar Animal' : 'Novo Animal'}
      </h1>
      <AnimalForm
        onSubmit={handleSubmit}
        onCancel={() => navigate('/animais')}
        initialData={animal || undefined}
      />
    </div>
  )
} 