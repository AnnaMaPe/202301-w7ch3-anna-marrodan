import styled from "styled-components";

export const UnicornCounterStyled = styled.div`
  background-color: pink;
  padding: 1em;
  text-align: center;
  display: flex;
  margin: 5rem;
  border-radius: 5%;

  .counter {
    &__title {
      color: white;
      font-size: 2em;
      padding: 1rem;
    }
    &__button {
      border: red;
      background-color: white;
      width: 100px;
      border-radius: 5%;
    }
  }
`;
