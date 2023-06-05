import styled from "styled-components";

import Responsiveness from "@infra/styles/Responsiveness";
import HeaderTitleBreakpoints from "./Breakpoints/HeaderTitleBreakpoints";
import HeaderSubTitleBreakpoints from "./Breakpoints/HeaderSubTitleBreakpoints";


const Styleds = {
  HeaderWrapper: styled.header`
    background-color: ${({ theme }) => theme.colors.DarkGreen};
    width: 100%;
    height: 95px;
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
  // HeaderTitle: styled.h1`
  //   color: #020202;
  //   ${Responsiveness(HeaderTitleBreakpoints)}
  //   font-weight: bold;
  // `,
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
