import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 * {
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: "Comic Sans MS", "Comic Sans", cursive;;
    
  }

  html {
    font-size: 62.5%;
    font-weight: 500;
    font-family: "Montserrat Alternates";
    color: #333333;
  }

  body {
    background-color: #FFFDFC;
  }
  
  ol, ul {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    font-family: inherit;
  }

  input {
    border: none;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img{
    max-width: 100%;
  }
`;
