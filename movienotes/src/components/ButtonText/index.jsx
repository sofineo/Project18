import { Container } from "./styles";

export function ButtonText({ title, isActive = false, icon: Icon, ...rest}){
  return(
    <Container
    type="button"
    isActive={isActive}>
      {Icon && <Icon size={21} />}
      {title}
    </Container>
  )
}