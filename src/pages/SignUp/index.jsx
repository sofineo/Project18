import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'
import { Container, Form, Background } from "./styles"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){

    if(!name||!email||!password){
      return alert("Please fill out the form")
    }

    api.post("/users", {name, email, password})
    .then(()=>{
      alert("Thanks for signing up. Your account has been created.")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Signing up wasn't able to be completed.")
      }
    })

  }

  return(
    <Container>
      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

      <h2>Crie sua conta</h2>

      <Input 
      placeholder="Nome"
      type="text"
      icon={FiUser}
      onChange={e => setName(e.target.value)}
      />
      <Input 
      placeholder="E-mail"
      type="text"
      icon={FiMail}
      onChange={e => setEmail(e.target.value)}
      />
      <Input 
      placeholder="Senha"
      type="password"
      icon={FiLock}
      onChange={e => setPassword(e.target.value)}
      />

      <Button 
      title="Cadastrar"
      onClick={handleSignUp}
      />

      <Link to="/">
      <FiArrowLeft />
      Voltar para o login
      </Link>
      </Form>
      <Background/>
    </Container>
  )
}
