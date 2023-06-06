import styled from "styled-components";

const Styleds = {
  ProductSectionWrapper: styled.section`
  width: 100%;
  margin: 100px 0;
  `,
  ProductSectionContext: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  gap: 100px;
  `,
  TitleContainer: styled.div``,
  CardsContainer: styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  gap: 100px;
  & > div{
    display: flex;
    align-item: center;
    gap: 50px;
    flex-flow: row warp;
  }
  `,
};

export default Styleds;