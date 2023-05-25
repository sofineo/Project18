import { Container } from "./styles";
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { api } from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";

export function Home(){
  const [search, setSearch] = useState(" ")
  const [notes, setNotes] = useState([])

  function handleSearch(search) {
    setSearch(search)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  console.log(notes)


  return(
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
          notes.maps(note => (
            <Note 
            key={String(note.id)}
            data={note}
            onClick={()=>{}}
            />
          ))
        }
      </div>
        
      </div>
    </Container>
  )
}