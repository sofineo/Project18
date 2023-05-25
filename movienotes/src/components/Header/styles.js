import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 11.6rem;

  grid-area: Header;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding: 0 12.8rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_GRAY};

  > h1 a {
    width: 20%;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    /* width: 60%; */
    width: clamp(24.5rem, 24.5rem + 30vw, 63rem);
    height: 5.6rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
    color: ${({ theme }) => theme.COLORS.GRAY};;

    border: none;
    border-radius: 1rem;

    padding: 0 2.4rem;
  }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 0.9rem;
    width: 20%;

    .profile {
      text-align: right;

      h2 a {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.8rem;

        &:hover {
          color: ${({ theme }) => theme.COLORS.PINK};
        }
      }
      
      button {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
      
        color: ${({ theme }) => theme.COLORS.GRAY};

        background: transparent;
        border: none;
      }
    }

    img {
      width: 6.4rem;
      height: 6.4rem;

      border-radius: 50%;
    }
`
