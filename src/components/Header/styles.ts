import styled from "styled-components";

export const ContainerHeader = styled.header`
  background: var(--blue);
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  button {
    font-size: 1rem;

    color: #fff;
    background: var(--blue-light);

    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;

    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 500px) {
      margin-top: 1.5rem;
    }
  }
`;
