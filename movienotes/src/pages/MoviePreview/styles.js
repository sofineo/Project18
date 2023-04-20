import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  > .button {
    margin: 4rem auto 0;
    max-width: 110rem;
    padding-left:3.2rem;
  }
  > .content {
    height: 58rem;
    margin: 2.4rem auto 0;
    max-width: 110rem;
    overflow-y: scroll;


    &::-webkit-scrollbar {
      width: .8rem;
      height: 9.6rem;
    }

    &::-webkit-scrollbar-thumb {
    width: .8rem;
    height: 9.6rem;
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
    border: 4px solid transparent;
    border-radius: 1rem;
    }
    }
    
`