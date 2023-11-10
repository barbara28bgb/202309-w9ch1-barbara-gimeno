import styled from "styled-components";

const NewMovie = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.mainBackground};
  .form {
    &__title {
      font-size: 1rem;
      padding-bottom: 10px;
      display: flex;
      justify-content: center;
      margin-bottom: 28px;
    }
  }
`;

export default NewMovie;
