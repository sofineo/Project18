import { Container } from "./styles";

export function ButtonText({ title, isActive = false, icon: Icon, ...rest}){
  return(
    <Container
    type="button"
    {...rest}
    isActive={isActive}>
      {Icon && <Icon size={21} />}
      {title}
    </Container>
  )
}