import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  > header {
    height: 14.4rem;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINKISH};

    padding-left: 14.4rem;
  }

  `

export const Form = styled.form`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin: -9.4rem auto 0;
  
  > div:nth-child(4) {
    margin-top: 1.6rem;
  }
  `

export const Avatar = styled.div`
  position: relative;
  width: 18.6rem;
  height: 18.6rem;

  margin-bottom: 6.4rem;

> img {
  width: 18.6rem;
  height: 18.6rem;

  border-radius: 50%;
}


> label {
  width: 4.8rem;
  height: 4.8rem;

  background: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 7px;
  right: 7px;

  input{
    display: none;
  }

  
  svg {
    height: 2rem;
    width: 2rem;
    
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
  
}

> label:hover{
  filter: brightness(0.9);
  cursor: pointer;
  transition: filter 0.2s;
}
`