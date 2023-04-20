import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'


export function Profile(){
  return(
    <Container>
      <header>
        <Link to={"/"}>
        <ButtonText 
        icon={ FiArrowLeft}
        title="Voltar"
        />
        </Link>
      </header>

    <Form>
      <Avatar>
      <img 
      src="https://github.com/sofineo.png"
      alt="Foto do usuário" 
      />

      <label htmlFor="avatar">
        <FiCamera />

        <input 
        type="file"
        id="avatar" 
        />
      </label>

      </Avatar>

      <Input 
      type="Text"
      icon={ FiUser }
      placeholder="Nome"/>
      <Input 
      type="E-mail"
      icon={ FiMail }
      placeholder="E-mail"/>
      <Input 
      type="Password"
      icon={ FiLock }
      placeholder="Senha atual"/>
      <Input 
      placeholder="Senha nova"
      type="Password"
      icon={ FiLock }
      />

      <Button 
      title="Salvar"
      loading/>
    </Form>

    </Container>
  )
}