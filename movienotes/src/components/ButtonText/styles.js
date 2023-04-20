import styled from "styled-components";

export const Container = styled.button`
  font-weight: 400;
  font-size: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  line-height: 2.1rem;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.PINK};
  background: none;

  border: none;
  `
