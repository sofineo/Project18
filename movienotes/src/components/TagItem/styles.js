import styled from "styled-components";

export const Container = styled.div`
height: 5.6rem;
display: flex;
align-items: center;
justify-content: center;
gap: 1.6rem;

padding: 1.6rem;

background-color: ${({ theme, isNew}) => isNew ? `transparent` : theme.COLORS.BACKGROUND_GRAY};
border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY}` : `none`};
border-radius: 1rem;

> input {
  display: flex;
  align-items: center;
  background: none;
  border: none;

  line-height: 1.9rem;

  &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
}

> .input-delete {
  color: #FFFFFF;
  width: fit-content;
  text-align: center;
}

> .input-add{
  width:12rem;
  color: #FFFFFF;
}

> button {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  
  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    width: 2.2rem;
    height: 2.4rem;
  }
}
`