import { Container } from "./styles"
import { FiArrowLeft } from "react-icons/fi"
import { Header } from '../../components/Header'
import { NotePreview } from '../../components/NotePreview'
import { ButtonText } from '../../components/ButtonText'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function MoviePreview(){
  const params = useParams()
  const [data, setData] = useState({})

  const navigate = useNavigate()

  async function handleDeleteButton() {
    const confirm = window.confirm(`Are you sure you want to delete this movie note?`)

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      alert(`Movie has been deleted!`)
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
      console.dir(response.data)
    }

    fetchNote()
  }, [])
  console.log(data)
  return(
    <Container>
      <Header />
      <div className="button">
        <Link to={"/"}>
        <ButtonText
          icon={FiArrowLeft}
          title="Voltar"/>
        </Link>

        <ButtonText 
        title={`Excluir filme`}
        onClick={handleDeleteButton}
        />
      </div>
      <div className="content">
        <NotePreview
            data={data}
            />
      </div>
    </Container>
  )
}