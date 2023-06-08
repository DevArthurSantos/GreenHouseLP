import styled, { css } from "styled-components";

import { TitleContainProps, TitleProps } from "@infra/types/titleProps";
import Responsiveness from "@infra/styles/Responsiveness";
import TitleBreakpoints from "./Breakpoints/TitleBreakpoints";

const Styleds = {
  Title: styled.h1<TitleProps>`
  color: ${({ color, theme }) => (theme.colors.text[color])};
  font-family: 'Montserrat';
  font-weight: ${({ weight }) => weight ? weight : '500'};
  font-style: normal;
  font-size: ${({ size }) => size ? size : '22px'};
  text-align: ${({ align }) => align ? align : 'center'};
  letter-spacing: 0.2px;
  ${Responsiveness(TitleBreakpoints)}
  & span{
    ${({ span }) => css`
    color: ${span?.color};
    font-size: ${span?.size};
    font-style: ${span?.style};
    text-decoration: ${span?.decoration};
  ${Responsiveness(TitleBreakpoints)}
    `}
  }
  `,
  TitleContainer: styled.div<TitleContainProps>`
  max-width: ${({ width }) => width ? width : '100%'};
  `
};

export default Styleds;