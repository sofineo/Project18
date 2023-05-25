import { Container, Profile } from "./styles";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/auth"; 
import { api } from "../../services/api";
import avatar_placeholder from '../../assets/avatar_placeholder.svg'
import { useState } from "react";


export function Header(){
  const [search, setSearch] = useState("")
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatar_placeholder

  function handleSignOut(){
    signOut()
    navigate("/")
  }

  function handleSearch() {
    return search
  }

  return(
  <Container>
    <h1>
      <Link to="/">RockeatMovies</Link>
      </h1>


    <label htmlFor=""></label>
    <input 
    type="text" 
    placeholder="Pesquisar pelo título"
    value={search}
    onChange={e => setSearch(e.target.value)}
    />

    <Profile>
      <div className="profile">
      <h2>
        <Link to="/profile">
        {user.name}
        </Link>
        </h2>
        <button
        type="button"
        onClick={handleSignOut}
        >
        sair
        </button>
      </div>
      <Link to="/profile">
      <img 
      src={avatarUrl}
      alt="Foto do usuário" />
      </Link>
    </Profile>
  </Container>
  )
}