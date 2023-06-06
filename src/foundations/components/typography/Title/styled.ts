import styled, { css } from "styled-components";

import { TitleContainProps, TitleProps } from "@infra/types/titleProps";

const Styleds = {
  Title: styled.h1<TitleProps>`
  color: ${({ color, theme }) => (theme.colors.text[color])};
  font-family: 'Montserrat';
  font-weight: ${({ weight }) => weight ? weight : '500'};
  font-style: normal;
  font-size: ${({ size }) => size ? size : '22px'};
  text-align: ${({ align }) => align ? align : 'center'};
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
  TitleContainer: styled.div<TitleContainProps>`
  width: ${({ width }) => width ? width : '100%'};
  `
};

export default Styleds;