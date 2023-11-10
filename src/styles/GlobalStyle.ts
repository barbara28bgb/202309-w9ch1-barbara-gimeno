import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
   font-family: ${({ theme }) => theme.typography.mainFontFamily};
   padding: 25px;
   margin: 20px;
   

  }

  ::after,
  ::before {
    box-sizing: border-box;
  }

  h1,
  h2,
  body {
    margin: 0;
    padding:0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
    color: ${({ theme }) => theme.color.mainFont};
    background-color: ${({ theme }) => theme.color.mainBackground};
  }
  
  form {
   background-color: ${({ theme }) => theme.color.cardBackground};
   font-family: ${({ theme }) => theme.typography.mainFontFamily};
   font-size: 1rem;

  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;

  }
  
`;

export default GlobalStyle;
