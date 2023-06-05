import styled, { css } from "styled-components";

import { ParagraphContainProps, ParagraphProps } from "@infra/types/paragraphProps";

const Styleds = {
  Paragraph: styled.p<ParagraphProps>`
  color: ${({ color, theme }) => (theme.colors.text[color])};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${({ weight }) => weight ? weight : '500'};
  font-size: ${({ size }) => size ? size : '22px'};
  text-align: center;
  letter-spacing: 0.2px;
  & span{
    ${({ span }) => css`
    color: ${span?.color};
    font-size: ${span?.size};
    font-style: ${span?.style};
    text-decoration: ${span?.decoration};
    `}
  }
  `,
  ParagraphContainer: styled.div<ParagraphContainProps>`
  width: ${({ width }) => width ? width : '100%'};
  `
};

export default Styleds;