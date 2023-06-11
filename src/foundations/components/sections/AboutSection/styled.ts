import Responsiveness from "@infra/styles/Responsiveness";
import styled from "styled-components";
import ImageBreakpoints from "./Breakpoints/ImageBreakpoints";
import TextContextBreakpoints from "./Breakpoints/TextContextBreakpoints";

const Styleds = {
  AboutSectionWrapper: styled.section`
    width: 100%;
    padding: 100px 0;
  `,
  AboutSectionContext: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 89px;
  flex-flow: row wrap-reverse;
  ${Responsiveness(TextContextBreakpoints)}
  `,
  TextContext: styled.div`
  width: 552px;
  height: 513px;
  background: 'red';
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  gap: 15px;
  `,
  ImageContainer: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `,
  Image: styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  ${Responsiveness(ImageBreakpoints)}
  `
};

export default Styleds;