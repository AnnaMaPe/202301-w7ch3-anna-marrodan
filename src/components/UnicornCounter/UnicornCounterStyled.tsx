import styled from "styled-components";

export const UnicornCounterStyled = styled.div`
  background-color: pink;
  padding: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 10rem;
  border-radius: 15px;
  width: 50rem;

  .counter {
    &__title {
      color: white;
      font-size: 2em;
      padding: 1rem;
    }
    &__button {
      border: red;
      background-color: white;
      font-size: 50px;
      text-align: center;
      width: 100px;
      border-radius: 30%;
    }
  }
`;
