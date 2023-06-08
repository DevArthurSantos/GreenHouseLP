import styled from "styled-components";

import Responsiveness from "@infra/styles/Responsiveness";
import HeaderImageBreakpoints from "./Breakpoints/HeaderImageBreakpoints";


const Styleds = {
  HeaderWrapper: styled.header`
    background-color: ${({ theme }) => theme.colors.DarkGreen};
    width: 100%;
    height: 95px;
    position: fixed;
    z-index: 50;
  `,
  LogoContainer: styled.div`
  `,
  HeaderContext: styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0 100px 0 100px;
  `,
  Image: styled.img`
    ${Responsiveness(HeaderImageBreakpoints)}
  `,
  // HeaderSubTitle: styled.h2`
  //   color: #BAC1CD;
  //   ${Responsiveness(HeaderSubTitleBreakpoints)}
  //   font-weight: bold;
  // `,
  // HeaderIcon: styled.img`
  //   font-size: 24px;
  //   font-weight: bold;
  // `,
};

export default Styleds;
