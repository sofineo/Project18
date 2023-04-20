import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 45% auto; `

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  margin: auto;

> h1 {
  font-size: 4.8rem;
  line-height: 6.3rem;
  color: ${({ theme }) => theme.COLORS.PINK};
}

> p {
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  margin-bottom: 5.1rem;
}

> h2 {
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.2rem;
  text-align: left; 
  
  margin-bottom: 3.2rem;

}
> a {
  color: ${({ theme }) => theme.COLORS.PINK};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
