import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > .content {
      width: 100%;
      display: flex;
      flex-direction: column;

      padding: 5rem 12.8rem;

      overflow-y: auto;

      h1 {
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 4.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE_WHITE};
    }

    > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 4rem;

    button {
      width: 20.7rem;
      height: 4.8rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: .8rem;

      background-color: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};

      border: none;
      border-radius: .8rem;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
    }

    .notes {
      max-height: 50rem;
      overflow-y: auto;

      display: flex;
      flex-direction: column;
      gap: 2.4rem;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }


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
   
  }
`