import styled from "styled-components";

export const Container = styled.button`
  width: 34rem;
  height: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BLACK};

  margin: 1.6rem 0 4.2rem;
  border: none;
  border-radius: 1rem;

  &:disabled {
    opacity: 0.5;
  }
`