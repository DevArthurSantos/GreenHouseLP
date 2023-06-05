import styled, { css } from "styled-components";

import { TitleContainProps, TitleProps } from "@infra/types/titleProps";

const Styleds = {
  Title: styled.h1<TitleProps>`
  color: ${({ color, theme }) => (theme.colors.text[color])};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: ${({ size }) => size ? size : '22px'};
  text-align: center;
  letter-spacing: 0.2px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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