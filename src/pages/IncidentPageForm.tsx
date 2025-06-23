import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Timestamp } from 'firebase/firestore'

import IncidentForm from '../components/IncidentForm'
import { getAnimais, addIncidente } from '../services/firestore'
import { Animal, Incidente, IncidenteStatus, IncidenteTipo } from '../types'

export default function IncidenteFormPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const animalId = searchParams.get('animalId')

  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')
  const [foto, setFoto] = useState<string | null>(null)

  const [animal, setAnimal] = useState<Animal | null>(null)
  const [animais, setAnimais] = useState<Animal[]>([])
  const [incidente, setIncidente] = useState<Partial<Incidente>>({
    tipo: IncidenteTipo.DOENCA,
    descricao: '',
    data: new Date(),
    status: IncidenteStatus.PENDENTE,
  })

  useEffect(() => {
    if (id) {
      // TODO: carregar incidente pelo ID
    } else if (animalId) {
      loadAnimal()
    } else {
      getAnimais().then(setAnimais)
    }
  }, [id, animalId])

  async function loadAnimal() {
    try {
      setLoading(true)
      const animaisData = await getAnimais()
      const found = animaisData.find(a => a.id === animalId)
      if (found) {
        setAnimal(found)
        setIncidente(prev => ({ ...prev, animalId: found.id }))
      } else {
        setErro('Animal não encontrado')
      }
    } catch (error) {
      console.error('Erro ao carregar animal:', error)
      setErro('Erro ao carregar dados do animal')
    } finally {
      setLoading(false)
    }
  }

  function handleFotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro('')

    if (!animal && !incidente.animalId) {
      setErro('Selecione um animal')
      return
    }

    try {
      setLoading(true)
      const data =
        incidente.data instanceof Timestamp
          ? incidente.data.toDate()
          : incidente.data instanceof Date
          ? incidente.data
          : new Date()

      await addIncidente({
        ...incidente,
        data,
        foto,
      } as Omit<Incidente, 'id' | 'createdAt' | 'updatedAt'>)

      navigate('/incidentes')
    } catch (error) {
      console.error('Erro ao salvar incidente:', error)
      setErro('Erro ao salvar dados do incidente')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <IncidentForm
      incidente={incidente}
      setIncidente={setIncidente}
      animais={animais}
      animal={animal}
      setAnimal={setAnimal}
      erro={erro}
      isEdit={!!id}
      foto={foto}
      handleFotoChange={handleFotoChange}
      handleSubmit={handleSubmit}
      loadAnimal={loadAnimal}
    />
  )
}
