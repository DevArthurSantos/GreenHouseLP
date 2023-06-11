import styled from "styled-components";

const HomeSectionWrapperHeight = `${window.screen.height}px`

const Styleds = {
  HomeSectionWrapper: styled.section`
  background: url('assets/images/png/homeBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding-top: 95px;
  `,
  HomeSectionContext: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  height: ${HomeSectionWrapperHeight};
  gap: 50px;
  `,
  SolicitarOrcamentoBTN: styled.button`
  width: 195px;
  height: 50px;
  background: ${({ theme }) => theme.colors.LightOrange};
  color: ${({ theme }) => theme.colors.text.Light};
  border: none;
  border-radius: 10px;
  font-weight: 700;
  `
};

export default Styleds;
