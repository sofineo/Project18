import styled from "styled-components";

export const Container = styled.span`
  height: 2.4rem;
  padding: .5rem 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BLACK};
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  
  border-radius: 8px;

  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;

`