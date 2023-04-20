import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  > .button {
      margin: 4rem auto 0;
      max-width: 118.4rem;
    }

  > .content {
    height: 58rem;
    margin: 2.4rem auto 0;
    max-width: 118.4rem;
    overflow-y: scroll;

    padding-right: 1rem;

    &::-webkit-scrollbar {
      width: .8rem;
      height: 5rem;
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

      .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 4rem 0;

      input {
        width: 48%;
        height: 5.5rem;
        padding: 1.8rem 1.6rem;

        gap: 4rem;
    
        border: none;
        border-radius: 1rem;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_GRAY};

        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: ${({theme}) => theme.COLORS.GRAY};
      }
      }

      textarea {
        width: 100%;
        height: 27.4rem;
        resize: none;

        padding: 1.8rem 1.6rem;

        border: none;
        border-radius: 1rem;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_GRAY};

        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: ${({theme}) => theme.COLORS.GRAY};

        margin-bottom: 4rem;
      }

      h2 {
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.6rem;
        color: ${({theme}) => theme.COLORS.GRAY};
        margin-bottom: 2.4rem;
      }

      .tags {
        width: 100%;
        min-height: 8.8rem;
        background-color: ${({theme}) => theme.COLORS.DARK_BLACK};

        color: ${({ theme }) => theme.COLORS.WHITE_WHITE};

        border-radius: .8rem;

        display: flex;
        gap: 2.4rem;
        padding: 1.6rem;

        margin-bottom: 4rem;
      }
    
      .buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          width: 48%;
          height: 5.6rem;
          border: none;
          border-radius: 1rem;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        button:nth-child(1) {
          color: ${({ theme }) => theme.COLORS.PINK};
          background-color: ${({theme}) => theme.COLORS.DARK_BLACK};;
        }

        button:nth-child(2) {
          color: ${({ theme }) => theme.COLORS.BLACK};
          background-color: ${({ theme }) => theme.COLORS.PINK};
        }
      }

  }


`