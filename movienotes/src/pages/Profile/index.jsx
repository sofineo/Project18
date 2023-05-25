import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatar_placeholder from '../../assets/avatar_placeholder.svg'
import { useEffect, useState } from "react";

export function Profile(){
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [nothingChanged, setNothingChanged] = useState(true)

  const avatarUrl = user.avatar ?  `${api.defaults.baseURL}files/${user.avatar}` : avatar_placeholder
  const [avatar, setAvatar] = useState(avatarUrl)  
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  async function handleUpdateProfile(){
    if(password && !newPassword){
      return alert("Please type a new password")
    }

    const update = {
      name,
      email,
      password: newPassword,
      old_password: password
    }

    const userUpdated = Object.assign(user, update)

    await updateProfile({ user: userUpdated, avatarFile })
    setNothingChanged(true)
  }  


  useEffect(() => {
      if(name === user.name && email === user.email && !password && !newPassword && avatar === avatarUrl){
        setNothingChanged(true)
      } else {setNothingChanged(false)}
  }, [name, email, password, newPassword, avatar])

  return(
    <Container>
      <header>
        <ButtonText 
        icon={ FiArrowLeft}
        title="Voltar"
        onClick={handleBack}
        />
      </header>

    <Form>
      <Avatar>
      <img 
      src={avatar}
      alt="Foto do usuário" 
      />

      <label htmlFor="avatar">
        <FiCamera />

        <input 
        type="file"
        id="avatar"
        onChange={handleChangeAvatar} 
        />
      </label>

      </Avatar>

      <Input 
      type="Text"
      icon={ FiUser }
      placeholder="Nome"
      value={name}
      onChange={e => setName(e.target.value)}
      />
      <Input 
      type="E-mail"
      icon={ FiMail }
      placeholder="E-mail"
      value={email}
      onChange={e => setEmail(e.target.value)}
      />
      <Input 
      type="Password"
      icon={ FiLock }
      placeholder="Senha atual"
      onChange={e => setPassword(e.target.value)}
      />
      <Input 
      placeholder="Senha nova"
      type="Password"
      onChange={e => setNewPassword(e.target.value)}
      icon={ FiLock }
      />

      <Button 
      title="Salvar"
      loading={nothingChanged}
      onClick={handleUpdateProfile}
      />
    </Form>

    </Container>
  )
}