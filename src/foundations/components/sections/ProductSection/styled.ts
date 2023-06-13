import styled from "styled-components";

const Styleds = {
  ProductSectionWrapper: styled.section`
  width: 100%;
  padding: 100px 0;
  @media (max-width: 500px) {
      display: none;
      padding: 0;
    }
  `,
  ProductSectionContext: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  gap: 100px;
  `,
  TitleContainer: styled.div`
  p {
    margin-top: 20px;
  }
  `,
  CardsContainer: styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  gap: 100px;
  & > div{
    display: flex;
    gap: 50px;
    flex-flow: row nowrap;
  }
  `,
};

export default Styleds;