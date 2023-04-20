import { Container } from "./styles";
import { AiFillStar,AiOutlineStar } from "react-icons/ai";

export function Stars(rating){
  return(
    <Container>
       <AiFillStar />
       <AiFillStar />
       <AiFillStar />
       <AiFillStar />
       <AiOutlineStar />
    </Container>
  )
  // if(rating == 0){
  //   return(
  //     <Container>
  //       <AiOutlineStar />
  //       <AiOutlineStar />
  //       <AiOutlineStar />
  //       <AiOutlineStar />
  //       <AiOutlineStar />
  //     </Container>
  //   )
  // } else if (rating == 1){
  //   return(
  //     <Container>
  //       <AiFillStar />
  //       <AiOutlineStar />
  //       <AiOutlineStar />
  //       <AiOutlineStar />
  //       <AiOutlineStar />
  //     </Container>
  //   )
  // } else if (rating == 2){
  //   return(
  //     <Container>
  //       <AiFillStar />
  //       <AiFillStar />
  //       <AiOutlineStar />
  //       <AiOutlineStar />
  //       <AiOutlineStar />
  //     </Container>
  //   )
  // } else if (rating == 3){
  //   return(
  //     <Container>
  //       <AiFillStar />
  //       <AiFillStar />
  //       <AiFillStar />
  //       <AiOutlineStar />
  //       <AiOutlineStar />
  //     </Container>
  //   )
  // } else if (rating == 4){
  //   return(
  //     <Container>
  //       <AiFillStar />
  //       <AiFillStar />
  //       <AiFillStar />
  //       <AiFillStar />
  //       <AiOutlineStar />
  //     </Container>
  //   )
  // } else if (rating == 5){
  //   return(
  //     <Container>
  //       <AiFillStar />
  //       <AiFillStar />
  //       <AiFillStar />
  //       <AiFillStar />
  //       <AiFillStar />
  //     </Container>
  //   )
  // }

}
