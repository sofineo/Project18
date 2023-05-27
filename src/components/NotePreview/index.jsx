import { Container } from "./styles";
import { Tag } from '../Tag'
import { Stars } from '../Stars'
import { FiClock } from "react-icons/fi";
import { api } from "../../services/api";
import avatar_placeholder from "../../assets/avatar_placeholder.svg"

export function NotePreview({ data, ...rest}){

  const avatarUrl = data.avatar ? `${api.defaults.baseURL}files/${data.avatar}` : avatar_placeholder

  return(
    <Container {...rest}>

      <div className="title">
      <h1>{data.title}</h1>
      <Stars rating={data.rating}
        />
      </div>

      <div className="created">
        <div className="profile">
          <img 
          src={avatarUrl} 
          alt="Foto do usuário"/>
          <p>Por <span>{data.name}</span></p>
        </div>
        <div className="time">
          <FiClock />
          <p>{data.created_at}</p>
        </div>
      </div>
      {
        data.tags && 
        <footer>
          {data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
        </footer>
      }
      <p>{data.description}</p>

    </Container>
  )
}