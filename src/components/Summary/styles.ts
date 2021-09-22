import styled, { css } from "styled-components";

interface ICard {
  isPositivo?: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  div {
    background: var(--shape);
    color: var(--text-title);

    padding: 1.5rem 2rem;

    border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;

      line-height: 3rem;

      font-size: 2rem;
      font-weight: 500;
    }
  }
`;

export const CardTotal = styled.section<ICard>`
  background: var(--red);
  color: var(--shape);

  padding: 1.5rem 2rem;

  border-radius: 0.25rem;

  ${({ isPositivo }) =>
    isPositivo &&
    css`
      background: var(--green); ;
    `}

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;

    line-height: 3rem;

    font-size: 2rem;
    font-weight: 500;
  }
`;
