import styled from "styled-components";

export const Container = styled.div`
  width: 34rem;
  height: 5.6rem;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
  border-radius: 1rem;
  margin-bottom: .8rem;
  
> input {
  color: ${({ theme }) => theme.COLORS.GRAY};
  background: transparent;

  border: none;
  padding: 1.8rem 2rem;
}

> svg {
  margin-left: 1.6rem;
}
`