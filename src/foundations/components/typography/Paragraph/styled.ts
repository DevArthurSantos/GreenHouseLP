import styled, { css } from "styled-components";

import { ParagraphProps } from "@infra/types/paragraphProps";

const Styleds = {
  Paragraph: styled.p<ParagraphProps>`
  color: ${({ color, theme }) => (theme.colors.text[color])};
  & span{
    ${({ span }) => css`
    color: ${span?.color};
    font-size: ${span?.size};
    font-style: ${span?.style};
    text-decoration: ${span?.decoration};
    `}
  }
  `,
  ParagraphContainer: styled.div``
};

export default Styleds;