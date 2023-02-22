import styled from "styled-components";

export const UnicornCounterStyled = styled.div`
  background-color: pink;
  padding: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 10rem;
  border-radius: 15px;
  object-fit: cover;
  width: 50vw;

  .counter {
    &__title {
      color: white;
      font-size: 2.5em;
      font-weight: bold;
      padding: 1rem 2rem 1rem 2rem;
    }
  }
  button {
    border: red;
    background-color: white;
    font-size: 50px;
    text-align: center;
    width: 10rem;
    height: 10rem;
    border-radius: 15px;
  }
`;
