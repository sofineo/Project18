import { Container } from "./styles"; 
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { TagItem } from '../../components/TagItem'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function CreateMovieNote(){
  return(
    <Container>
      <Header />
      <div className="button">
        <Link to="/">
        <ButtonText
        icon={FiArrowLeft}
        title="Voltar"/>
        </Link>
      </div>

      <div className="content">
        <h1>Novo filme</h1>

        <form>
          <div className="header">
          <input
          placeholder="Título" 
          type="text" />
          <input
          placeholder="Sua nota (de 0 a 5)" 
          type="text" 
          maxLength={1}
          />
          </div>
          <textarea 
          placeholder="Observações"/>

          <h2>Marcadores</h2>
          
          <div className="tags">
            <TagItem 
            value={"Drama"}/>
            <TagItem 
            isNew
            />
          </div>

          <div className="buttons">
          <button 
          type="button"
          >
          Excluir filme
          </button>
          <button 
          type="submit"
          >
          Salvar alterações
          </button>


          </div>

        </form>
      </div>


    </Container>
  )
}