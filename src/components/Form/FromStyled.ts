import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  font-family: ${({ theme }) => theme.typography.mainFontFamily};

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: ${({ theme }) => theme.color.cardBackground};
    padding: 5px;

    &__label {
      font-size: 1.4rem;
      margin-bottom: 12px;
    }

    &__input {
      padding: 10px 0;
      color: ${({ theme }) => theme.color.mainBackground};
      font-size: 1rem;
      border: solid;
      border-color: #393939eb;
      border-radius: 8px;
    }

    &__box {
      margin-top: 10px;
    }
  }
`;

export default FormStyled;
