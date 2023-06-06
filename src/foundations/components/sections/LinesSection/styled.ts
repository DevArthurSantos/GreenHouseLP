import styled from "styled-components";

const Styleds = {
  LinesSectionWrapper: styled.section`
    background: url('assets/images/png/linesBackground.png');
    background-repeat: no-repeat;
    background-size: cover;
  `,
  LinesSectionContext: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  padding: 150px 0;
  gap: 100px;
  `,
  LinesCardsContainer: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  gap: 50px;
  `,
};

export default Styleds;
