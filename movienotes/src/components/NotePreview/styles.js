import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 22.2rem;

  padding: 3.2rem;

  border-radius: 1.6rem;

  > .title {
    display: flex;
    gap: 1.9rem;
    align-items: center;

    margin-bottom: 2.4rem;

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
    }
    svg {
      width: 2rem;
      height: 2rem;
    }
  }


  
  > .created {
  
    display: flex;
    align-items: center;
    gap: .8rem;

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;  

    margin-bottom: 4rem;

    .profile {
      display: flex;
      align-items: center;
      gap: .8rem;

      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }
    }

    .time {
      display: flex;
      align-items: center;
      gap: .8rem;

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
  
  > footer {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: .8rem;

    margin-bottom: 4rem;
  }

  > p {

    font-size: 1.6rem;
    line-height: 2.1rem;
    text-align: justify;

    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`