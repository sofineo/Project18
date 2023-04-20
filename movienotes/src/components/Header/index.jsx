import { Container, Profile } from "./styles";
import { Link } from 'react-router-dom'


export function Header(){
  return(
  <Container>
    <h1>
      <Link to="/">RockeatMovies</Link>
      </h1>


    <label htmlFor=""></label>
    <input 
    type="text" 
    placeholder="Pesquisar pelo título"
    />

    <Profile>
      <div className="profile">
      <h2>
        <Link to="/profile">
        Sofia Neo
        </Link>
        </h2>
      <Link to="/" >
        sair
        </Link>
      </div>
      <Link to="/profile">
      <img 
      src="https://github.com/sofineo.png"
      alt="Foto do usuário" />
      </Link>
    </Profile>
  </Container>
  )
}