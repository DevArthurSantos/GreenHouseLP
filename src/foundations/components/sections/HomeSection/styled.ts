import styled from "styled-components";

const HomeSectionWrapperHeight = `${window.screen.height}px`

const Styleds = {
  HomeSectionWrapper: styled.section`
  background: url('assets/images/png/homeBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  
  `,
  HomeSectionContext: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  height: ${HomeSectionWrapperHeight};
  gap: 50px;
  h1 {
    
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  }
  `,
  SolicitarOrcamentoBTN: styled.a`
  width: 236px;
  height: 60px;
  background: ${({ theme }) => theme.colors.LightOrange};
  color: ${({ theme }) => theme.colors.text.Light};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration:none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  `
};

export default Styleds;
