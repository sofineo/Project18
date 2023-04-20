import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi"


export function TagItem({ isNew, value, onClick, ...rest}){
  return(
    <Container 
    isNew={isNew}
    >
      <input 
      type="text"
      value={value} 
      readOnly={!isNew}
      className={isNew ? 'input-add' : 'input-delete'}
      placeholder={isNew ? "Novo marcador" : ""}
      />

      <button
      type="button"
      onClick={onClick}
      >
        { isNew? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}