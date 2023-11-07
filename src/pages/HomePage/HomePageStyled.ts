import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;

  .home-page {
    &__title {
      padding: 20px 0 0 0;
      background-color: ${({ theme }) => theme.color.mainBackground};
    }
  }
`;

export default HomePageStyled;
