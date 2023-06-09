import styled, { css } from "styled-components";

import { ParagraphContainProps, ParagraphProps } from "@infra/types/paragraphProps";
import Responsiveness from "@infra/styles/Responsiveness";
import ParagraphBreakpoints from "./Breakpoints/ParagraphBreakpoints";

const Styleds = {
  Paragraph: styled.p<ParagraphProps>`
  color: ${({ color, theme }) => (theme.colors.text[color])};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${({ weight }) => weight ? weight : '500'};
  font-size: ${({ size }) => size ? size : '22px'};
  text-align: ${({ align }) => align ? align : 'center'};
  letter-spacing: 0.2px;
  ${Responsiveness(ParagraphBreakpoints)}
  & span{
    ${({ span }) => css`
    color: ${span?.color};
    font-weight: ${span?.weight};
    font-size: ${span?.size};
    font-style: ${span?.style};
    text-decoration: ${span?.decoration};
    ${Responsiveness(ParagraphBreakpoints)}
    `}
  }
  `,
  ParagraphContainer: styled.div<ParagraphContainProps>`
  max-width: ${({ width }) => width ? width : '100%'};
  `
};

export default Styleds;