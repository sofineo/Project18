import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 22.2rem;

  padding: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINKISH};

  border-radius: 1.6rem;

  > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  > p {
    height: 4rem;
    overflow: clip;
    /* white-space: nowrap; */
    text-overflow: ellipsis;

    text-align: justify;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.9rem;

    color: ${({ theme }) => theme.COLORS.GRAY};

    margin: 1.5rem 0;
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: .8rem;
  }
`