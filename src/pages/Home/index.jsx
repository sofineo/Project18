import { Container } from "./styles";
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { FiPlus } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { api } from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";

export function Home(){
  const [search, setSearch] = useState(" ")
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleSearch(search) {
    setSearch(search)
  }

  function handleMoviePreview(noteId) {
    navigate(`/preview/${noteId}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data.notesWithTags)
    }

    fetchNotes()
  }, [search])

  console.log(notes)
  return (
    <Container>
      <Header sendSearchValue={handleSearch}/>
      <div className="content">
      <header>
        <h1>Meus filmes</h1>
          <Link to="/new">
        <button>
          <FiPlus />
          Adicionar filme
        </button>
          </Link>
      </header>

      <div className="notes">
        { 
          notes.map(note => (
            <Note 
            key={String(note.id)}
            data={note}
            onClick={()=>{handleMoviePreview(note.id)}}
            />
          ))
        }
      </div>
        
      </div>
    </Container>
  )
}