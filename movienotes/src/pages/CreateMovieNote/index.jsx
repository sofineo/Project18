import { Container } from "./styles"; 
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { TagItem } from '../../components/TagItem'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function CreateMovieNote(){
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function isNumber(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 53)) {
      event.preventDefault();
      alert("Rating must be a number between 0 to 5.")
      return false;
    }
    return true;
  }

  function handleAddTag(){
    if(!newTag) {
      return
    }
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deletedTag) {
    setTags(prevState => prevState.filter(tag => tag !== deletedTag))
  }

  function handleButtonDelete() {
    setTitle("")
    setRating("")
    setDescription("")
    setTags([])
    setNewTag("")
  }

  async function handleCreateMovieNote() {
    if(!title || !rating) {
      return alert("Movie title and rating need to be field.")
    }

    if(newTag) {
      return alert("You've just left a tag to add but you haven't clicked on the button. Please add the tag or leave the field empty")
    }

    await api.post("/notes", { title, rating, description, tags})

    alert("Movie Note successfully created.")
    navigate(-1)
  }

  return(
    <Container>
      <Header />
      <div className="button">
        <Link to="/">
        <ButtonText
        icon={FiArrowLeft}
        title="Voltar"
        onClick={handleBack}
        />
        </Link>
      </div>

      <div className="content">
        <h1>Novo filme</h1>

        <form>
          <div className="header">
          <input
          placeholder="Título" 
          type="text" 
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
          <input
          placeholder="Sua nota (de 0 a 5)" 
          type="text" 
          value={rating}
          onChange={e => setRating(e.target.value)}
          onKeyPress={e => isNumber(e)}
          maxLength={1}
          />
          </div>
          <textarea 
          placeholder="Observações"
          value={description}
          onChange={e => setDescription(e.target.value)}
          />

          <h2>Marcadores</h2>
          
          <div className="tags">
            {
            tags.map((tag, index) => 
            (<TagItem 
              key={String(index)}
              value={tag}
              onClick={() => handleRemoveTag(tag)}
              />)
            )
            }

            <TagItem 
            isNew
            onChange={e => setNewTag(e.target.value)}
            onClick={handleAddTag}
            value={newTag}

            />
          </div>

          <div className="buttons">
            
          <button 
          type="button"
          onClick={handleButtonDelete}
          >
          Excluir filme
          </button>

          <button 
          type="button"
          onClick={handleCreateMovieNote}
          >
          Salvar alterações
          </button>


          </div>

        </form>
      </div>


    </Container>
  )
}