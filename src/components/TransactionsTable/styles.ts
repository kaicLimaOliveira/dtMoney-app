import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  margin-top: 4rem;

  @media (max-width: 500px) {
    display: flex;
    justify-self: center;
    align-items: center;
    width: 100%;
    padding: 0 1rem 0 0.5rem;
    overflow: scroll;
  }

  table {
    border-spacing: 0 0.5rem;

    width: 100%;

    th {
      color: var(--text-body);
      font-weight: 400;

      padding: 1rem 2rem;
      line-height: 1.5rem;

      text-align: left;
    }

    td {
      border-radius: 0.25rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      padding: 1rem 2rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;

        background: transparent;
        color: var(--blue);
        border: 0;

        &:hover {
          color: ${darken(0.3, "#6933ff")};
        }
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 5rem;

  h3 {
    color: var(--text-title);
  }
`;
