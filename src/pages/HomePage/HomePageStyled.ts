import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.mainBackground};

  .home-page {
    &__title {
      padding: 20px 0 20px 0;
      background-color: ${({ theme }) => theme.color.mainBackground};
      font-size: 2.4rem;
      text-align: center;
    }
    &__add {
      padding: 25px;
    }
  }
`;

export default HomePageStyled;
