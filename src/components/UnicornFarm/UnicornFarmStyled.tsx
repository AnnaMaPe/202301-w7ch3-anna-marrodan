import styled from "styled-components";

export const UnicornFarmStyled = styled.div`
  padding: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 3rem;

  object-fit: cover;
  width: 50vw;

  .gallery {
    &__title {
      font-size: 50px;
      padding-top: 0;
    }
    &__emojis {
      font-size: 50px;
    }
  }
`;
